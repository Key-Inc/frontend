import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/common/Header/Header';
import { getCookieByName } from './shared/utils';
import { useEffect } from 'react';

const TOASTER_DURATION = 5000;

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookieByName('token');
    if (!token) navigate('/auth');
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-auto flex *:flex-auto'>
        <Outlet />
      </main>
      <Toaster duration={TOASTER_DURATION} />
    </div>
  );
};
