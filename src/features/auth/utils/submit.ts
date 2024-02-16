import { SubmitHandler } from 'react-hook-form';
import { FormFields } from '../types/form';
import axios from 'axios';
import { LOGIN } from '@/lib/constants/api';

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  try {
    const res = await axios.post<{ token: string }>(LOGIN, data);
    console.log(res.data.token);
  } catch (e) {
    console.error(e);
  }
};
