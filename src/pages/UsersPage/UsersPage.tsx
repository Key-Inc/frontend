import { UsersList } from '@/features/UsersList/UsersList';

export const UsersPage = () => (
  <div className='lg:p-10 p-4'>
    <h3 className='text-2xl font-semibold leading-none tracking-tight'>
      Список пользователей
    </h3>
    <UsersList />
  </div>
);
