import { Input } from '@/components/ui';

import { Pagination } from '@/components/common';
import { useUsersList } from './hooks/useUserList';
import { UserCard } from './components/UserCard/UserCard';

export const UsersList = () => {
  const { users, setParamsByName, params, nextPage, previousPage, fetchUsers } =
    useUsersList();

  return (
    <div>
      <div className='flex gap-5 py-4 flex-wrap md:items-center justify-center md:justify-start'>
        <Input
          placeholder='Имя'
          className='w-48'
          onChange={(e) => setParamsByName('NameQuery', e.target.value)}
        />
      </div>

      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {users.map((user, index) => (
          <UserCard
            user={user}
            key={index}
            fetchUsers={fetchUsers}
            resetPage={() => setParamsByName('Page', '1')}
          />
        ))}
      </div>

      <Pagination
        className='justify-end'
        nextPage={nextPage}
        previousPage={previousPage}
        page={params.get('Page') || '1'}
      />
    </div>
  );
};
