/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (userid: string) => {
  const [userRole, setUserRole] = useState('Student');

  console.log(userRole);
  const handleApprove = async () => {
    //@ts-ignore
    await putUserApprove(userid, userRole);
  };

  const handleReject = async () => {
    await putUserReject(userid);
  };

  return { handleApprove, handleReject, setUserRole };
};
