import { deleteCookieValue } from '@/shared/utils';
import { useNavigate } from 'react-router-dom';

export const useHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookieValue('token');
    navigate('/auth');
  };

  return {
    handleLogout,
  };
};
