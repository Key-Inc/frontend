import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../constants/validation';
import { loginRequest } from '../utils/loginRequest';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await loginRequest(data);
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
