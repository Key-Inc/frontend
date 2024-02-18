import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

const TOASTER_DURATION = 5000;

export const App = () => (
  <div className='min-h-screen'>
    <Outlet />
    <Toaster duration={TOASTER_DURATION} />
  </div>
);
