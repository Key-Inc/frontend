import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validationSchema } from '../constants/validation';
import { FixedValues, FormFields } from '../types/form';
import { useEffect, useState } from 'react';
import { getProfile } from '../utils/getProfile';
import { toast } from 'sonner';
import { changeProfile } from '../utils/changeProfile';

export const useProfileForm = () => {
  const [blockedValues, setBlockedValues] = useState<FixedValues>();
  const form = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await changeProfile(data);
      toast('Профиль успешно обновлён');
    } catch (e) {
      toast(String(e));
    }
  };

  useEffect(() => {
    getProfile()
      .then((res) => {
        const { email, phoneNumber, birthDate, ...fixedData } = res.data;
        form.setValue('email', email);
        form.setValue('phoneNumber', phoneNumber || '');
        form.setValue('birthDate', birthDate?.substring(0, 10) || '');
        setBlockedValues(fixedData);
      })
      .catch((e) => {
        toast.error(String(e));
      });
  }, []);

  return { form, errors: form.formState.errors, onSubmit, blockedValues };
};
