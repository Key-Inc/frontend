import { Button, Input } from '@/components/ui';
import { Controller, useForm } from 'react-hook-form';
import { FormFields, validationSchema } from './constants/validation';
import { zodResolver } from '@hookform/resolvers/zod';

export const Auth = () => {
  const { handleSubmit, control } = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      className="flex flex-col max-w-prose mx-3 gap-5 "
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <label>
            <span>Email</span>
            <Input type="email" {...field} />
          </label>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <label>
            <span>Пароль</span>
            <Input type="password" {...field} />
          </label>
        )}
      />

      <Button type="submit" className="mt-3">
        Логин
      </Button>
    </form>
  );
};
