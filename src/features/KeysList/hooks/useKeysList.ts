import { api } from '@/api/api';
import { KEYS } from '@/lib/constants/api';
import { useEffect, useState } from 'react';

export const useKeysList = () => {
  const [keys, setKeys] = useState<KeyFullDto[]>([]);
  const [keyStatus, setKeyStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get<KeyFullDto[]>(
        `${KEYS}${keyStatus ? `?keyStatus=${keyStatus}` : ''}`,
        {},
      );
      setKeys(res.data);
    };
    fetchData();
  }, [keyStatus]);

  return { keys, setKeyStatus };
};
