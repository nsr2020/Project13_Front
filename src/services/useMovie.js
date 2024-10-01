import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { fetchMovie } from '../reducer/MovieReducer/movie.action'; 
import { MovieContext } from '../providers/MovieProvider'; 

const useMovie = () => {
  const { id, place } = useParams();
  const user = localStorage.getItem('userName');
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MovieContext);
  const { movie } = state;
  const platformName = movie?.platform 

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    if(JSON.parse(user).rol === "admin"){
      navigate(`/moviesAdmin/${platformName}`)
      return;
    }
    fetchMovie(id, dispatch);
  }, [user, id, dispatch, navigate]);

  return {
    movie,place
  };
};

export default useMovie;
