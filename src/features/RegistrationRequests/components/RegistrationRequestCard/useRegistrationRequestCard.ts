import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (userid: string, userrole: string) => {
  const [userRole, setUserRole] = useState(userrole);

  const handleApprove = async () => {
    await putUserApprove(userid, { params: { userRole } });
  };

  const handleReject = async () => {
    await putUserReject(userid);
  };

  return { handleApprove, handleReject, setUserRole };
};
