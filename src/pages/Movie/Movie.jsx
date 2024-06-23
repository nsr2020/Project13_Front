import  { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loading from '../../components/Loading/Loading'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import MovieCardInfo from '../../components/MovieItems/MovieCardInfo'
import { INITIAL_STATE_MOVIE, MovieReducer } from '../../reducer/MovieReducer/movie.reducer'
import { fetchMovie } from '../../reducer/MovieReducer/movie.action'

const Movie = () => {
  const {id} = useParams()
  const user = localStorage.getItem('userName')
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE_MOVIE)
  const {movie}=state;
  
  useEffect(() =>{
    if(!user){
      navigate("/")
      return
    }
     fetchMovie(id, dispatch)

    },[ user])

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