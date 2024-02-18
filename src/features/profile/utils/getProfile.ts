import { getCookieByName } from '@/lib/utils';

export const getProfile = () => {
  const token = getCookieByName('token');
};
