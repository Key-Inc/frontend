import { REGISTRATION_STATUS } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const getRegistrationStatus = async () => {
  const res = await api.get<RegistrationStatus>(REGISTRATION_STATUS);
  return res;
};
