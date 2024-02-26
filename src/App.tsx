import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/common/Header/Header';

const TOASTER_DURATION = 5000;

export const App = () => (
  <div className='min-h-screen flex flex-col'>
    <Header />
    <main className='flex-auto flex *:flex-auto'>
      <Outlet />
    </main>
    <Toaster duration={TOASTER_DURATION} />
  </div>
);
