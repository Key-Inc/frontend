import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../constants/validation';

import { useNavigate } from 'react-router-dom';
import { getRegistrationStatus, postLogin } from '@/shared/utils';
import { useState } from 'react';
import { getForbiddenError } from '../utils/getForbiddenError';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginCredintialsDto>({
    resolver: zodResolver(validationSchema),
  });
  const [isForbidden, setIsForbidden] = useState(false);
  const [forbiddenCause, setForbiddenCause] = useState('');

  const onSubmit: SubmitHandler<LoginCredintialsDto> = async (data) => {
    try {
      const res = await postLogin(data);
      document.cookie = `token=${res.data.token}`;
      const status = (await getRegistrationStatus()).data;
      if (status !== 'Accepted') {
        const errorText = getForbiddenError(status);
        setForbiddenCause(errorText);
        setIsForbidden(true);
        form.setError('root', { message: errorText });
      }

      navigate('/');
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
