import { Button } from '@/components/ui';
import { RegistrationRequestCard } from './components/RegistrationRequestCard/RegistrationRequestCard';
import { useRegistrationsRequests } from './hooks/useRegistrationsRequests';

export const RegistrationRequests = () => {
  const { users, setParamsByName, params, nextPage, previousPage } =
    useRegistrationsRequests();

  return (
    <div className='flex gap-4 flex-wrap'>
      {users.map((user, index) => (
        <RegistrationRequestCard user={user} key={index} />
      ))}
      <Button onClick={() => previousPage()}>Back</Button>
      <Button onClick={() => nextPage()}>Front</Button>
      {/* <div>
        <label>Сортировка:</label>
        <select
          value={params.get('Sorting')}
          onChange={(e) => setParamsByName('sorting', e.target.value)}
        >
          <option value='CreateAsc'>По возрастанию времени создания</option>
          <option value='CreateDesc'>По убыванию времени создания</option>
          <option value='AgeAsc'>По возрастанию возраста</option>
          <option value='AgeDesc'>По убыванию возраста</option>
        </select>
      </div> */}
    </div>
  );
};
