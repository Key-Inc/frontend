import { KEY_APPROVE, KEY_REJECT } from '@/lib/constants/api';
import axios from 'axios';
import { toast } from 'sonner';

export const reject = async (id: string) => {
  try {
    await axios.put(KEY_REJECT(id));
  } catch (e) {
    toast('Произошла ошибка');
  }
};

export const approve = async (id: string, isRejectOverlapping: boolean, errCallback?: (e?: unknown) => void) => {
  try {
    await axios.put(KEY_APPROVE(id), { isRejectOverlapping });
  } catch (e) {
    if (errCallback) errCallback(e);
  }
};
