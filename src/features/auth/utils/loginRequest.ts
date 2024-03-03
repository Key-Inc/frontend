import { FormFields } from '../types/form';
import { LOGIN } from '@/lib/constants/api';
import { api } from '@/api/api';

export const loginRequest = async (data: FormFields) => {
  const res = await api.post<{ token: string }>(LOGIN, data);
  return res;
};
