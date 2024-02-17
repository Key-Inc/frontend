import { Button } from '@/components/ui';
import { RegistrationRequestCard } from './components/RegistrationRequestCard/RegistrationRequestCard';
import { useRegistrationsRequests } from './hooks/useRegistrationsRequests';

export const RegistrationRequests = () => {
  const { users } = useRegistrationsRequests();

  return (
    <div className='flex gap-4 flex-wrap'>
      {users.map((user, index) => (
        <RegistrationRequestCard user={user} key={index} />
      ))}
      {/* <Button onClick={() => previousPage()}>Back</Button>
      <Button onClick={() => nextPage()}>Front</Button> */}
    </div>
  );
};
