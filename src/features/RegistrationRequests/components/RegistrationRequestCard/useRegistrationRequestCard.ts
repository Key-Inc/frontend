/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (userid: string, userrole: string) => {
  const [userRole, setUserRole] = useState(userrole);

  const handleApprove = async () => {
    //@ts-ignore
    await putUserApprove(userid, { applicantRole: userRole });
  };

  const handleReject = async () => {
    await putUserReject(userid);
  };

  return { handleApprove, handleReject, setUserRole };
};
