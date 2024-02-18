import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validationSchema } from '../constants/validation';
import { FixedValues, FormFields } from '../types/form';
import { useEffect, useState } from 'react';
import { getProfile } from '../utils/getProfile';
import { toast } from 'sonner';

export const useProfileForm = () => {
  const [blockedValues, setBlockedValues] = useState<FixedValues>();
  const form = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {};

  useEffect(() => {
    getProfile()
      .then((res) => {
        const { email, phoneNumber, birthDate, ...fixedData } = res.data;
        form.setValue('email', email);
        form.setValue('phoneNumber', phoneNumber || '');
        form.setValue('birthDate', birthDate || '');
        setBlockedValues(fixedData);
      })
      .catch((e) => {
        toast.error(String(e));
      });
  }, []);

  return { form, errors: form.formState.errors, onSubmit, blockedValues };
};
