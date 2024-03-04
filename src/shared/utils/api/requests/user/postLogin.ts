import { LOGIN } from '@/shared/constants/api';
import { api } from '@/shared/utils/api/api';
import { AxiosRequestConfig } from 'axios';

export const postLogin = async (
  data: LoginCredintialsDto,
  params?: AxiosRequestConfig,
) => {
  const res = await api.post<{ token: string }>(LOGIN, data, params);
  return res;
};
