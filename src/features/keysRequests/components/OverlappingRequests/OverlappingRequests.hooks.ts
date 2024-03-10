import { OVERLAPPING } from '@/shared/constants/api';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { api } from '@/shared/utils/api/api';
import { putKeyApprove, putKeyReject } from '@/shared/utils';

export const useOverlappingRequests = (
  isOpen: boolean,
  toggle: () => void,
  id: string,
) => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);

  const getRequests = async () => {
    try {
      const res = await api.get<KeyRequestFullDto[]>(OVERLAPPING(id));
      if (res.data.length === 0) handleApprove();
      setRequestsList(res.data);
    } catch (e) {
      toast('Произошла ошибка');
    }
  };

  const handleApprove = async () => {
    await putKeyApprove(id, true);
    toggle();
  };

  const handleReject = async (id: string) => {
    await putKeyReject(id);
    await getRequests();
  };

  useEffect(() => {
    if (isOpen) getRequests();
  }, [isOpen]);

  return { requestsList, handleApprove, handleReject };
};
