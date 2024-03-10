import { putChangeUserRole } from '@/shared/utils/api/requests/user/putChangeUserRole';
import { useState } from 'react';

export const useUserCard = (
  userId: string,
  fetchUsers: () => void,
  resetPage: () => void,
) => {
  const [userRole, setUserRole] = useState('Student');

  const hadleChangeUserRole = async () => {
    await putChangeUserRole(userId, { params: { userRole: userRole } });
    resetPage();
    fetchUsers();
  };

  return {
    hadleChangeUserRole,
    setUserRole,
    userRole,
  };
};
