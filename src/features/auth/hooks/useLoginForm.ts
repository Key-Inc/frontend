import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../constants/validation';

import { useNavigate } from 'react-router-dom';
import {
  getRegistrationStatus,
  postLogin,
  getUserRole,
  setCookieValue,
  deleteCookieValue,
} from '@/shared/utils';
import { useState } from 'react';
import { getForbiddenError } from '../utils/getForbiddenError';
import { ForbiddenCause } from '../types/forbidden';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginCredintialsDto>({
    resolver: zodResolver(validationSchema),
  });
  const [isForbidden, setIsForbidden] = useState(false);
  const [forbiddenCause, setForbiddenCause] = useState('');

  const setError = (status: ForbiddenCause) => {
    const errorText = getForbiddenError(status);
    setForbiddenCause(errorText);
    setIsForbidden(true);
    form.setError('root', { message: errorText });
    deleteCookieValue('token');
  };

  const onSubmit: SubmitHandler<LoginCredintialsDto> = async (data) => {
    try {
      const res = await postLogin(data);
      setCookieValue('token', res.data.token);
      const status = (await getRegistrationStatus()).data;
      if (status !== 'Accepted') {
        setError(status);
      } else {
        const userRole = (await getUserRole()).data;
        if (userRole === 'Student' || userRole === 'Teacher') setError('Role');
        else navigate('/');
      }
    } catch (e) {
      form.setError('root', { message: String(e) });
    }
  };

  return {
    form,
    errors: form.formState.errors,
    onSubmit,
    isForbidden,
    setIsForbidden,
    forbiddenCause,
  };
};
