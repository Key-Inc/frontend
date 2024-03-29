import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthPage } from './pages';
import { RegistrationRequestsPage } from '@/pages/RegistrationRequestsPage/RegistrationRequestsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { KeysPage } from './pages/KeysPage/KeysPage';
import { KeysRequestsPage } from './pages/KeysRequestsPage/KeysRequestsPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <KeysRequestsPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/registrationrequests',
        element: <RegistrationRequestsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/keys',
        element: <KeysPage />,
      },
    ],
  },
]);
