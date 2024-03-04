import { PROFILE } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const getProfile = async () => {
  const res = await api.get<UserDto>(PROFILE);
  return res;
};
