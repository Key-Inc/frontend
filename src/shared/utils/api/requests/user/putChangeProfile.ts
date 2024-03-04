import { PROFILE } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const putChangeProfile = async (data: UserEditDto) => {
  await api.put(PROFILE, data);
};
