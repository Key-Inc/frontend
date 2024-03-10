import { Input } from '@/components/ui';
import { RegistrationRequestCard } from './components/RegistrationRequestCard/RegistrationRequestCard';
import { useRegistrationsRequests } from './hooks/useRegistrationsRequests';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Pagination } from '@/components/common';

export const RegistrationRequests = () => {
  const {
    users,
    setParamsByName,
    params,
    nextPage,
    previousPage,
    fetchRegistrationRequests,
  } = useRegistrationsRequests();

  return (
    <div>
      <div className='flex gap-5 py-4 flex-wrap md:items-center justify-center md:justify-start'>
        <Select
          onValueChange={(value) => setParamsByName('Sorting', value)}
          defaultValue={params.get('Sorting') || ''}
        >
          <SelectTrigger className='w-48'>
            <SelectValue placeholder='Сортировка' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='CreateAsc'>Сначала новые</SelectItem>
            <SelectItem value='CreateDesc'>Сначала старые</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder='Имя'
          className='w-48'
          onChange={(e) => setParamsByName('NameQuery', e.target.value)}
        />
      </div>

      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {users.map((user, index) => (
          <RegistrationRequestCard
            user={user}
            key={index}
            fetchRegistrationRequests={fetchRegistrationRequests}
          />
        ))}
      </div>

      <Pagination
        className='justify-end'
        nextPage={nextPage}
        previousPage={previousPage}
        page={params.get('Page') || ''}
      />
    </div>
  );
};
