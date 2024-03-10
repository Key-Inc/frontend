import { ACCOUNT_APPROVE } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const putUserApprove = async (id: string, params?: AxiosRequestConfig) => {
  await api.put(ACCOUNT_APPROVE(id), {}, params);
};
