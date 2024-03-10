import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProfileSchema } from '../constants/ProfileSchema';
import { FixedValues } from '../types/form';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { putChangeProfile } from '@/shared/utils/api/requests/user/putChangeProfile';
import { getProfile } from '@/shared/utils';

export const useProfileForm = () => {
  const [blockedValues, setBlockedValues] = useState<FixedValues>();
  const form = useForm<UserEditDto>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit: SubmitHandler<UserEditDto> = async (data) => {
    try {
      console.log(data);
      await putChangeProfile(data);
      toast('Профиль успешно обновлён');
    } catch (e) {
      toast(String(e));
    }
  };

  const setUserProfile = async () => {
    try {
      const res = await getProfile();
      const { email, phoneNumber, birthDate, ...fixedData } = res.data;
      form.setValue('email', email);
      form.setValue('phoneNumber', phoneNumber || undefined);
      form.setValue('birthDate', birthDate?.substring(0, 10) || undefined);
      setBlockedValues(fixedData);
    } catch (e) {
      toast(String(e));
    }
  };

  useEffect(() => {
    setUserProfile();
  }, []);

  return { form, errors: form.formState.errors, onSubmit, blockedValues };
};
