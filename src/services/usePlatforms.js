import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getPlatforms } from '../reducer/PlatformsReducer/platforms.action';
import { PlatformContext } from '../providers/PlatformsProvider';

export const usePlatforms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(PlatformContext);
  const { platforms } = state;
  const user = localStorage.getItem('userName');
  const platformName = 'Netflix';
  const demo = !user ? location.state?.demo : null
  
  useEffect(() => {
    
    if (!demo ) {
      if (user === null) {
        navigate('/');
        return;
      }
      if (JSON.parse(user).rol === 'admin') {
        navigate(`/moviesAdmin/${platformName}`);
        return;
      }
    }
    getPlatforms(dispatch);
  }, [user,demo]);
  return {
    platforms,
    navigate,
    demo
  };
};
