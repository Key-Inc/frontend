import { useEffect, useState } from 'react';
import { getKeysList } from '@/shared/utils';

export const useKeysList = () => {
  const [keys, setKeys] = useState<KeyFullDto[]>([]);
  const [keyStatus, setKeyStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getKeysList({ params: { keyStatus } });
      setKeys(res.data);
    };
    fetchData();
  }, [keyStatus]);

  return { keys, setKeyStatus };
};
