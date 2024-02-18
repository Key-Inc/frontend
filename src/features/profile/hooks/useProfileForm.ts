import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validationSchema } from '../constants/validation';
import { FormFields } from '../types/form';
import { useEffect } from 'react';
import { getProfile } from '../utils/getProfile';

export const useProfileForm = () => {
  const form = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {};

  useEffect(() => {
    getProfile();
  }, []);

  return { form, errors: form.formState.errors, onSubmit };
};
