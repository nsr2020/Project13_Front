import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../providers/UserProvider';
import { useContext, useEffect } from 'react';
import { getUserInfo } from '../reducer/UserInfoReducer/user.action';

export const useUser = () => {
  const user = JSON.parse(localStorage.getItem('userName'));
  const { id, place } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { state, dispatch } = useContext(UserContext);
  const { userMovies } = state;
  const platformName = place || 'Netflix';

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    if (user.rol === 'admin') {
      navigate(`/moviesAdmin/${platformName}`);
      return;
    }
    getUserInfo(user._id, dispatch);
  }, []);
  return {
    user,
    navigate,
    toast,
    dispatch,
    userMovies,
    id,
    place,
  };
};
