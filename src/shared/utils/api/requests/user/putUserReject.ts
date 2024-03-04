import { ACCOUNT_REJECT } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const putUserReject = async (id: string) => {
  await api.put(ACCOUNT_REJECT(id), {});
};
