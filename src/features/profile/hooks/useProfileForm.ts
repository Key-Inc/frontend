import { useForm } from 'react-hook-form';

export const useProfileForm = () => {
  const form = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });
};
