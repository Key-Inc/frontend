import { useState } from 'react';
import { putUserApprove, putUserReject } from '@/shared/utils';

export const useRegistrationRequestCard = (
  userid: string,
  fetchRegistrationRequests: () => void,
  resetPage: () => void,
) => {
  const [userRole, setUserRole] = useState('Student');

  const handleApprove = async () => {
    await putUserApprove(userid, { params: { applicantRole: userRole } });
    resetPage();
    fetchRegistrationRequests();
  };

  const handleReject = async () => {
    await putUserReject(userid);
    resetPage();
    fetchRegistrationRequests();
  };

  return { handleApprove, handleReject, setUserRole };
};
