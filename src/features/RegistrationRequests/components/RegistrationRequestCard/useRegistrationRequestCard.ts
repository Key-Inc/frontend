import { ACCOUNT } from '@/lib/constants/api';
import axios from 'axios';
import { useState } from 'react';

export interface approveParams {
  user: string | null;
}

export const useRegistrationRequestCard = (userid: string, userrole: string) => {
  const [userRole, setUserRole] = useState(userrole);

  const handleApprove = async () => {
    try {
      await axios.put(`${ACCOUNT}/${userid}/approve?userRole=${userRole}`, {});
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async () => {
    try {
      await axios.put(`${ACCOUNT}/${userid}/reject`, {});
    } catch (error) {
      console.error(error);
    }
  };

  return { handleApprove, handleReject, setUserRole };
};
