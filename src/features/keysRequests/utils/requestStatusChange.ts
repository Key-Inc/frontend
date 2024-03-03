import { api } from '@/api/api';
import { KEY_APPROVE, KEY_REJECT } from '@/lib/constants/api';
import { toast } from 'sonner';

export const reject = async (id: string) => {
  try {
    await api.put(KEY_REJECT(id));
  } catch (e) {
    toast('Произошла ошибка');
  }
};

export const approve = async (
  id: string,
  forceConfirmation: boolean,
  errCallback?: (e?: unknown) => void,
) => {
  try {
    await api.put(KEY_APPROVE(id), { forceConfirmation });
  } catch (e) {
    if (errCallback) errCallback(e);
  }
};
