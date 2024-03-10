import { api } from '@/shared/utils/api/api';
import { KEYS, USERS } from '@/shared/constants/api';
import { useState } from 'react';

export const useKeyCard = (keyId: string, fetchKeys: () => void) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState<UserFullDto[]>([]);

  const handleUserSelect = (value: string | undefined) => {
    setSelectedUser(value || '');
  };

  const handleSearchChange = (value: string) => {
    if (value.trim() !== '') {
      handleUserSearch(value);
    }
  };

  const hadleReturnInStock = async () => {
    const res = await api.put(`${KEYS}/${keyId}/instock`, {});
    fetchKeys();
    return res;
  };

  const hadleIssueToUser = async () => {
    const res = await api.put(`${KEYS}/${keyId}/user/${selectedUser}/issued`, {});
    fetchKeys();
    return res;
  };

  const handleUserSearch = async (userQuery: string) => {
    const res = await api.get<UserFullDtoPagedListDto>(
      `${USERS}${userQuery ? `?NameQuery=${userQuery}` : ''}`,
      {},
    );
    setUsers(res.data.items);
  };

  return {
    hadleReturnInStock,
    handleUserSelect,
    setSelectedUser,
    users,
    handleUserSearch,
    handleSearchChange,
    hadleIssueToUser,
  };
};
