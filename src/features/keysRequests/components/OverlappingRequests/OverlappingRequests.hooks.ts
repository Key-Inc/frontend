import { OVERLAPPING } from '@/lib/constants/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { approve } from '@/features/keysRequests/utils/requestStatusChange';

export const useOverlappingRequests = (isOpen: boolean, id: string) => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);

  const getRequests = async () => {
    try {
      const res = await axios.get<KeyRequestFullDto[]>(OVERLAPPING(id));
      setRequestsList(res.data);
    } catch (e) {
      toast('Произошла ошибка');
    }
  };

  const handleApprove = () => approve(id, true, () => toast('Произошла ошибка'));

  useEffect(() => {
    if (isOpen) getRequests();
  }, [isOpen]);

  return { requestsList, handleApprove };
};
