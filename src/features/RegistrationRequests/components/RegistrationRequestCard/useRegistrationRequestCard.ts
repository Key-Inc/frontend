import { ACCOUNT } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

export const useRegistrationRequestCard = (userid: string, userrole: string) => {
  const [userRole, setUserRole] = useState(userrole);

  const handleApprove = async () => {
    try {
      const res = await axios.put(`${ACCOUNT}/${userid}/approve?userRole=${userRole}`, {});
      return res;
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error('Произошла ошибка', {
          cancel: { label: 'Close' },
        });
      }
    }
  };

  const handleReject = async () => {
    try {
      await axios.put(`${ACCOUNT}/${userid}/reject`, {});
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error('Произошла ошибка', {
          cancel: { label: 'Close' },
        });
      }
    }
  };

  return { handleApprove, handleReject, setUserRole };
};
