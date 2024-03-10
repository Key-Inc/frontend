import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (
  userid: string,
  fetchRegistrationRequests: () => void,
) => {
  const [userRole, setUserRole] = useState('Student');

  const handleApprove = async () => {
    await putUserApprove(userid, { params: { applicantRole: userRole } });
    fetchRegistrationRequests();
  };

  const handleReject = async () => {
    await putUserReject(userid);
    fetchRegistrationRequests();
  };

  return { handleApprove, handleReject, setUserRole };
};
