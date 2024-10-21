import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { fetchMovies } from '../reducer/MoviesReducer/movies.action';
import { MoviesContext } from '../providers/MoviesProvider';

const useMovies = () => {
  const { state, dispatch } = useContext(MoviesContext);
  const {
    indexAction,
    indexComedy,
    indexHorror,
    indexKids,
    indexReleases,
    moviesAction,
    moviesComedy,
    moviesHorror,
    moviesKids,
    moviesReleases,
  } = state;
  const { platformName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem('userName');
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
    fetchMovies(platformName, dispatch);
  }, [platformName, user, demo]);

  useEffect(() => {
    dispatch({ type: 'INDEX_ACTION', payload: 0 });
    dispatch({ type: 'INDEX_COMEDY', payload: 0 });
    dispatch({ type: 'INDEX_HORROR', payload: 0 });
    dispatch({ type: 'INDEX_KIDS', payload: 0 });
    dispatch({ type: 'INDEX_RELEASES', payload: 0 });
  }, [platformName]);

  return {
    moviesAction,
    moviesComedy,
    moviesHorror,
    moviesKids,
    moviesReleases,
    platformName,
    dispatch,
    indexAction,
    indexComedy,
    indexHorror,
    indexKids,
    indexReleases,
    navigate,
    demo
  };
};
export default useMovies;
