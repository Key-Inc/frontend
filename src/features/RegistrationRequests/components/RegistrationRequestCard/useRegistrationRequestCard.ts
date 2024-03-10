/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (
  userid: string,
  fetchRegistrationRequests: () => void,
) => {
  const [userRole, setUserRole] = useState('Student');

  const handleApprove = async () => {
    //@ts-ignore
    await putUserApprove(userid, userRole);
    fetchRegistrationRequests();
  };

  const handleReject = async () => {
    await putUserReject(userid);
    fetchRegistrationRequests();
  };

  return { handleApprove, handleReject, setUserRole };
};
