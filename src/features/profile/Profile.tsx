import { Input, Button } from '@/components/ui';
import { FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form';
import { Controller } from 'react-hook-form';
import { useProfileForm } from './hooks/useProfileForm';
import { BlockedValue } from './components/BlockedValue/BlockedValue';
import { Loader } from '@/components/ui/loader';

export const Profile = () => {
  const { form, errors, onSubmit, blockedValues } = useProfileForm();

  return (
    <Form {...form}>
      {blockedValues ? (
        <form className='flex flex-col max-w-prose gap-4' onSubmit={form.handleSubmit(onSubmit)}>
          <BlockedValue label='Имя' value={blockedValues?.fullName || ''} />
          <Controller
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} isError={!!errors.email} />
                </FormControl>
                <FormMessage>{errors.email && <span>{errors.email.message}</span>}</FormMessage>
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
                <FormMessage>{errors.password && <span>{errors.password.message}</span>}</FormMessage>
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name='birthDate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <Input type='date' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input type='tel' {...field} isError={!!errors.phoneNumber} />
                </FormControl>
                <FormMessage>{errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}</FormMessage>
              </FormItem>
            )}
          />
          <BlockedValue label='Пол' value={blockedValues?.gender || ''} />
          <BlockedValue label='Роль' value={blockedValues?.userRole || ''} />
          <Button type='submit' className='mt-3'>
            Изменить данные
          </Button>
        </form>
      ) : (
        <Loader />
      )}
    </Form>
  );
};
