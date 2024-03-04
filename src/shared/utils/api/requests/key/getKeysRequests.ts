import { REQUEST } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const getKeysRequests = async (params?: AxiosRequestConfig) => {
  const res = await api.get<KeyRequestPagedListDto>(REQUEST, params);
  return res;
};
