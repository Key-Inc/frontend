import { Input, Button } from '@/components/ui';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
  FormField,
} from '@/components/ui/form';
import { useProfileForm } from './hooks/useProfileForm';
import { BlockedValue } from './components/BlockedValue';
import { Loader } from '@/components/ui/loader';
import { translateGender, translateUserRole } from '@/shared/utils';

export const Profile = () => {
  const { form, errors, onSubmit, blockedValues } = useProfileForm();

  return (
    <Form {...form}>
      {blockedValues ? (
        <form
          className='flex flex-col max-w-prose gap-4 border p-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <BlockedValue label='Имя' value={blockedValues?.fullName || ''} />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} isError={!!errors.email} />
                </FormControl>
                <FormMessage>
                  {errors.email && <span>{errors.email.message}</span>}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input type='password' {...field} isError={!!errors.password} />
                </FormControl>
                <FormMessage>
                  {errors.password && <span>{errors.password.message}</span>}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='birthDate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <Input
                    type='date'
                    {...field}
                    max={new Date().toISOString().substring(0, 10)}
                  />
                </FormControl>
                <FormMessage>
                  {errors.birthDate && <span>{errors.birthDate.message}</span>}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input type='tel' {...field} isError={!!errors.phoneNumber} />
                </FormControl>
                <FormMessage>
                  {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                </FormMessage>
              </FormItem>
            )}
          />
          <BlockedValue
            label='Пол'
            value={translateGender(blockedValues?.gender) || ''}
          />
          <BlockedValue
            label='Роль'
            value={translateUserRole(blockedValues?.userRole) || ''}
          />
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
