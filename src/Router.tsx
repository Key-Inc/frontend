import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthPage } from './pages';
import { Profile } from './features/profile';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
