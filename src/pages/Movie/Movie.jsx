import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loading from '../../components/Loading/Loading'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import MovieCardInfo from '../../components/MovieItems/MovieCardInfo'
import { fetchMovie } from '../../utils/Movie/MovieFunctions'

const Movie = () => {
  const {id} = useParams()
  const user = localStorage.getItem('userName')
  const [ movie, setMovie] = useState()
  const navigate = useNavigate()
  
  useEffect(() =>{
    if(!user){
      navigate("/")
      return
    }
     fetchMovie(id, setMovie)

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