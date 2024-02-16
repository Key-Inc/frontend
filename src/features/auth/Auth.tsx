import { Button, Input } from '@/components/ui';
import { Controller, useForm } from 'react-hook-form';
import { validationSchema } from './constants/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFields } from './types/form';
import { onSubmit } from './utils/submit';

export const Auth = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      className="flex flex-col max-w-prose gap-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <label>
            Email
            <Input type="email" {...field} isError={!!errors.email} />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <label>
            Пароль
            <Input type="password" {...field} isError={!!errors.password} />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
        )}
      />

      <Button type="submit" className="mt-3">
        Логин
      </Button>
    </form>
  );
};
