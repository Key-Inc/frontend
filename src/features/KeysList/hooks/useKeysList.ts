import { KEYS } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useKeysList = () => {
  const [keys, setKeys] = useState<KeyFullDto[]>([]);
  const [keyStatus, setKeyStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<KeyFullDto[]>(`${KEYS}${keyStatus ? `?keyStatus=${keyStatus}` : ''}`, {});
        setKeys(res.data);
      } catch (e) {
        if (e instanceof AxiosError) {
          toast.error('Произошла ошибка', {
            cancel: { label: 'Close' },
          });
        }
      }
    };
    fetchData();
  }, [keyStatus]);

  return { keys, setKeyStatus };
};
