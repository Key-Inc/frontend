import { USER_ROLE } from '@/shared/constants/api';
import { api } from '@/shared/utils/api/api';
import { AxiosRequestConfig } from 'axios';

export const getUserRole = async (params?: AxiosRequestConfig) => {
  const res = await api.get<Role>(USER_ROLE, params);
  return res;
};
