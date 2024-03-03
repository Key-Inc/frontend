import { api } from '@/api/api';
import { PROFILE } from '@/lib/constants/api';

export const getProfile = async () => {
  const res = await api.get<UserDto>(PROFILE);
  return res;
};
