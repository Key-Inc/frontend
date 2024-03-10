import { deleteCookieValue, getCookieByName } from '@/shared/utils';
import { ROOT } from '@/shared/constants/api';
import axios from 'axios';
import { toast } from 'sonner';

export const api = axios.create({
  baseURL: ROOT,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      toast.error(`Ошибка сервера:${error.response.data.title}`, {
        cancel: { label: 'Close' },
      });
    }
    if (error.response.status === 401) {
      deleteCookieValue('token');
      if (!window.location.href.includes('auth')) window.location.href = '/auth';
    }
    toast.error(`Произошла ошибка:${error.response.data.title}`, {
      cancel: { label: 'Close' },
    });
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  (config) => {
    const token = getCookieByName('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
