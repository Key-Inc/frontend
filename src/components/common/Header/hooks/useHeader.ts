import { useNavigate } from 'react-router-dom';

export const useHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth');
  };

  return {
    handleLogout,
  };
};
