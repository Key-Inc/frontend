import { KEYS, USERS } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useKeyCard = (keyId: string) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [users, setUsers] = useState<SearchUserDto[]>([]);

  const handleUserSelect = (value: string | undefined) => {
    console.log(value);
    setSelectedUser(value || '');
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

  useEffect(() => {
    const handleUserSearch = async () => {
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
    handleUserSearch();
  }, [userQuery]);

  return {
    hadleReturnInStock,
    handleUserSelect,
    setSelectedUser,
    selectedUser,
    setUserQuery,
    users,
  };
};
