import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../constants/validation';

import { useNavigate } from 'react-router-dom';
import { postLogin } from '@/shared/utils';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginCredintialsDto>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginCredintialsDto> = async (data) => {
    try {
      const res = await postLogin(data);
      document.cookie = `token=${res.data.token}`;
      navigate('/');
    } catch (e) {
      form.setError('root', { message: String(e) });
    }
  };

  return {
    form,
    errors: form.formState.errors,
    onSubmit,
  };
};
