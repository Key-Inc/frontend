import { useEffect, useState } from 'react';
import { getKeysList } from '@/shared/utils';

export const useKeysList = () => {
  const [keys, setKeys] = useState<KeyFullDto[]>([]);
  const [keyStatus, setKeyStatus] = useState('');

  const fetchKeys = async () => {
    const res = await getKeysList({ params: { keyStatus } });
    setKeys(res.data);
  };

  useEffect(() => {
    fetchKeys();
  }, [keyStatus]);

  return { keys, setKeyStatus, fetchKeys };
};
