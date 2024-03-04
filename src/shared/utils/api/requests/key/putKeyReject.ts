import { KEY_REJECT } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const putKeyReject = async (id: string) => {
  await api.put(KEY_REJECT(id));
};
