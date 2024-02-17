import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthPage } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
]);
