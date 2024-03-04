import { CONSIDERATION } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const getRegistrationRequests = async (params?: AxiosRequestConfig) => {
  const res = await api.get<RegistrationRequestPagedListDto>(CONSIDERATION, params);
  return res;
};
