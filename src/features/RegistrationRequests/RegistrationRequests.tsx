import { Button, Input } from '@/components/ui';
import { RegistrationRequestCard } from './components/RegistrationRequestCard/RegistrationRequestCard';
import { useRegistrationsRequests } from './hooks/useRegistrationsRequests';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const RegistrationRequests = () => {
  const { users, setParamsByName, params, nextPage, previousPage } =
    useRegistrationsRequests();

  return (
    <>
      <div className='flex gap-5 mb-4'>
        <Select
          onValueChange={(value) => setParamsByName('Sorting', value)}
          defaultValue={params.get('Sorting') || ''}
        >
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder='Сортировка' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='CreateAsc'>
              По возрастанию времени создания
            </SelectItem>
            <SelectItem value='CreateDesc'>
              По убыванию времени создания
            </SelectItem>
            <SelectItem value='AgeAsc'>Сначала моложе</SelectItem>
            <SelectItem value='AgeDesc'>Сначала старше</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder='Имя'
          className='w-48'
          onChange={(e) => setParamsByName('FullName', e.target.value)}
        />
      </div>

      <div className='flex gap-4 flex-wrap items-center'>
        {users.map((user, index) => (
          <RegistrationRequestCard user={user} key={index} />
        ))}
      </div>

      <div className='gap-3 flex pt-3'>
        <Button onClick={() => previousPage()}>Back</Button>
        <Button onClick={() => nextPage()}>Front</Button>
      </div>
    </>
  );
};
