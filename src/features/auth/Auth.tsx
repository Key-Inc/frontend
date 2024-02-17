import { Button, Input } from '@/components/ui';
import { Controller } from 'react-hook-form';
import { useLoginForm } from './hooks/useLoginForm';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const Auth = () => {
  const { form, errors, onSubmit } = useLoginForm();

  return (
    <Form {...form}>
      <form
        className='flex flex-col max-w-prose gap-8'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' {...field} isError={!!errors.email} />
              </FormControl>
              <FormMessage className='absolute'>
                {errors.email && <span>{errors.email.message}</span>}
              </FormMessage>
            </FormItem>
          )}
        />

        <Controller
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type='password' {...field} isError={!!errors.password} />
              </FormControl>
              <FormMessage className='absolute'>
                {errors.password && <span>{errors.password.message}</span>}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type='submit' className='mt-3'>
          Логин
        </Button>
        {errors.root && (
          <span className='text-error -mt-3'>{errors.root.message}</span>
        )}
      </form>
    </Form>
  );
};
