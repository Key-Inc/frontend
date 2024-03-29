import { api } from '@/shared/utils/api/api';
import { KEYS, USERS } from '@/shared/constants/api';
import { useState } from 'react';

export const useKeyCard = (keyId: string) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState<SearchUserDto[]>([]);

  const handleUserSelect = (value: string | undefined) => {
    console.log(value);
    setSelectedUser(value || '');
  };

  const handleSearchChange = (value: string) => {
    if (value.trim() !== '') {
      handleUserSearch(value);
    }
  };

  const hadleReturnInStock = async () => {
    const res = await api.put(`${KEYS}/${keyId}/instock`, {});
    return res;
  };

  const hadleIssueToUser = async () => {
    const res = await api.put(`${KEYS}/${keyId}/user/${selectedUser}/issued`, {});
    return res;
  };

  const handleUserSearch = async (userQuery: string) => {
    const res = await api.get<SearchUserDto[]>(
      `${USERS}${userQuery ? `?fullname=${userQuery}` : ''}`,
      {},
    );
    setUsers(res.data);
  };

  return {
    hadleReturnInStock,
    handleUserSelect,
    setSelectedUser,
    users,
    handleUserSearch,
    selectedUser,
    handleSearchChange,
    hadleIssueToUser,
  };
};
