import Loading from '../../components/Loading/Loading';
import GoBack from '../../components/GoBack/GoBack';
import MenuComponent from '../../components/MenuItems/Menu';
import MovieCardInfo from '../../components/MovieItems/MovieCardInfo';
import useMovie from '../../services/useMovie';

const Movie = () => {
  const { movie, place } = useMovie();

  return (
    <>
      {!movie && <Loading />}
      {movie && <MovieCardInfo movie={movie} place={place} />}
      <GoBack
        goTo={
          place === 'movies'
            ? `/movies/${movie?.platform}`
            : `/movies_Search/${movie?.platform}`
        }
      />
      <MenuComponent
        id={movie?._id}
        platformName={movie?.platform}
        place={place}
      />
    </>
  );
};
export default Movie;
