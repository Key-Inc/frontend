import { Button, Input } from '@/components/ui';
import { useForm } from 'react-hook-form';

export const Auth = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col max-w-prose mx-3 gap-5 "
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label>
        <span>Email</span>
        <Input type="email" {...register('email')} />
      </label>
      <label>
        <span>Пароль</span>
        <Input type="password" {...register('password')} />
      </label>
      <Button className="mt-3">Логин</Button>
    </form>
  );
};
