import { KEY_APPROVE } from '@/shared/constants/api';
import { api } from '@/shared/utils';

export const putKeyApprove = async (id: string, forceConfirmation: boolean) => {
  await api.put(KEY_APPROVE(id), { forceConfirmation });
};
