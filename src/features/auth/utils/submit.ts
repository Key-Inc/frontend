import { SubmitHandler } from 'react-hook-form';
import { FormFields } from '../types/form';
import axios, { AxiosError } from 'axios';
import { LOGIN } from '@/lib/constants/api';

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  try {
    const res = await axios.post<{ token: string }>(LOGIN, data);
    return res;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw e.response?.data.message || 'Произошла ошибка';
    }
    throw 'Произошла ошибка';
  }
};
