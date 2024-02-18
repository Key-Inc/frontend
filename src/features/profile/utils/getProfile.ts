import { PROFILE } from '@/lib/constants/api';
import { getCookieByName } from '@/lib/utils';
import axios, { AxiosError } from 'axios';

export const getProfile = async () => {
  const token = getCookieByName('token');
  try {
    const res = await axios.get<UserDto>(PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw e.response?.data.message || 'Произошла ошибка';
    }
    throw 'Произошла ошибка';
  }
};
