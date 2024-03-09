import { ACCOUNT_APPROVE } from '@/shared/constants/api';
import { api } from '@/shared/utils';
import { AxiosRequestConfig } from 'axios';

export const putUserApprove = async (id: string, params?: AxiosRequestConfig) => {
  await api.put(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    `${ACCOUNT_APPROVE(id)}/?applicantRole=${params.applicantRole}`,
    params,
    {},
  );
};
