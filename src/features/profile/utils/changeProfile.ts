import { FormFields } from '../types/form';
import { PROFILE } from '@/lib/constants/api';
import { api } from '@/api/api';

export const changeProfile = async (data: FormFields) => {
  await api.put(PROFILE, data);
};
