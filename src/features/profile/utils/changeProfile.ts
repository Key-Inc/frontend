import { getCookieByName } from '@/lib';
import { FormFields } from '../types/form';
import axios, { AxiosError } from 'axios';
import { PROFILE } from '@/lib/constants/api';

export const changeProfile = async (data: FormFields) => {
  const token = getCookieByName('token');
  try {
    await axios.put(PROFILE, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    if (e instanceof AxiosError) {
      throw e.response?.data.message || 'Произошла ошибка';
    }
    throw 'Произошла ошибка';
  }
};
