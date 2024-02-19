import { RegistrationRequests } from '@/features/RegistrationRequests';

export const RegistrationRequestsPage = () => (
  <div className='lg:p-10 p-4'>
    <h3 className='text-2xl font-semibold leading-none tracking-tight'>
      Заявки на регистрацию
    </h3>
    <RegistrationRequests />
  </div>
);
