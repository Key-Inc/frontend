import { USERS } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const getUsers = async (params?: AxiosRequestConfig) => {
  const res = await api.get<UserFullDtoPagedListDto>(USERS, params);
  return res;
};
