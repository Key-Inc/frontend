import { OVERLAPPING } from '@/shared/constants/api';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { api } from '@/shared/utils/api/api';
import { putKeyApprove } from '@/shared/utils';

export const useOverlappingRequests = (isOpen: boolean, id: string) => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);

  const getRequests = async () => {
    try {
      const res = await api.get<KeyRequestFullDto[]>(OVERLAPPING(id));
      setRequestsList(res.data);
    } catch (e) {
      toast('Произошла ошибка');
    }
  };

  const handleApprove = () => putKeyApprove(id, true);

  useEffect(() => {
    if (isOpen) getRequests();
  }, [isOpen]);

  return { requestsList, handleApprove };
};
