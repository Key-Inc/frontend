import { EDIT_USER_ROLE } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const putChangeUserRole = async (id: string, params?: AxiosRequestConfig) => {
  await api.put(EDIT_USER_ROLE(id), {}, params);
};
