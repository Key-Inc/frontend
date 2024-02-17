import { Button, Input } from '@/components/ui';
import { Controller } from 'react-hook-form';
import { useLoginForm } from './hooks/useLoginForm';

export const Auth = () => {
  const { control, errors, handleSubmit, onSubmit } = useLoginForm();

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
      {errors.root && (
        <span className="text-red-500 -mt-3">{errors.root.message}</span>
      )}
    </form>
  );
};
