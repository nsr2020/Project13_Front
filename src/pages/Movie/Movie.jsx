import Loading from '../../components/Loading/Loading'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import MovieCardInfo from '../../components/MovieItems/MovieCardInfo'
import useMovie from '../../services/useMovie'

const Movie = () => {
    const { movie} = useMovie();
  return (
    <>
    {!movie && <Loading/>}
    {movie && (
     <MovieCardInfo movie={movie}/>
    )}
    <GoBack goTo={`/movies/${movie?.platform}`} />
    <MenuComponent id={movie?._id} platformName={movie?.platform}/>
    </>
  )
}
export default Movie