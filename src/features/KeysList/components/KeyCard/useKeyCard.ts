import { KEYS, USERS } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

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
    try {
      const res = await axios.put(`${KEYS}/${keyId}/instock`, {});
      return res;
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error('Произошла ошибка', {
          cancel: { label: 'Close' },
        });
      }
    }
  };

  const hadleIssueToUser = async () => {
    try {
      const res = await axios.put(`${KEYS}/${keyId}/user/${selectedUser}/issued`, {});
      return res;
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error('Произошла ошибка', {
          cancel: { label: 'Close' },
        });
      }
    }
  };

  const handleUserSearch = async (userQuery: string) => {
    try {
      const res = await axios.get<SearchUserDto[]>(
        `${USERS}${userQuery ? `?fullname=${userQuery}` : ''}`,
        {},
      );
      setUsers(res.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error('Произошла ошибка', {
          cancel: { label: 'Close' },
        });
      }
    }
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
