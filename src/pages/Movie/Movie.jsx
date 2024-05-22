import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loading from '../../components/Loading/Loading'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import MovieCardInfo from '../../components/MovieItems/MovieCardInfo'

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
    fetch(`https://project-13-back.vercel.app/api/v1/movies/${id}`)
     .then(response => response.json())
     .then(data =>{
      setMovie(data)
     
     });

    },[ user])

  return (
    <>
    {!movie && <Loading/>}
    {movie && (
     <MovieCardInfo movie={movie}/>
    )}
    <GoBack goTo={`/movies/${movie?.platform}`} />
    <MenuComponent id={movie?._id} />
    </>
  )
}
export default Movie