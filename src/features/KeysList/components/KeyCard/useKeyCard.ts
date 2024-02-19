import { KEYS } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

export const useKeyCard = () => {
  const [selectedUser, setSelectedUser] = useState<string>('');

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
  return { hadleReturnInStock, handleUserSelect, setSelectedUser, selectedUser };
};
