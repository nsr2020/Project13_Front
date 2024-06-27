import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { fetchMovie } from '../reducer/MovieReducer/movie.action'; 
import { MovieContext } from '../providers/MovieProvider'; 

const useMovie = () => {
  const { id } = useParams();
  const user = localStorage.getItem('userName');
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MovieContext);
  const { movie } = state;

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    fetchMovie(id, dispatch);
  }, [user, id, dispatch, navigate]);

  return {
    movie
  };
};

export default useMovie;
