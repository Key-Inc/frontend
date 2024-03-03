import { api } from '@/api/api';
import { ACCOUNT } from '@/lib/constants/api';
import { useState } from 'react';

export const useRegistrationRequestCard = (userid: string, userrole: string) => {
  const [userRole, setUserRole] = useState(userrole);

  const handleApprove = async () => {
    const res = await api.put(`${ACCOUNT}/${userid}/approve?userRole=${userRole}`, {});
    return res;
  };

  const handleReject = async () => {
    await api.put(`${ACCOUNT}/${userid}/reject`, {});
  };

  return { handleApprove, handleReject, setUserRole };
};
