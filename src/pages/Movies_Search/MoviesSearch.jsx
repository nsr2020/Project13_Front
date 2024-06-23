import { Flex, useToast} from '@chakra-ui/react'
import { useEffect, useReducer, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import Loading from '../../components/Loading/Loading'
import SearchAreaInput from '../../components/MovieSearchItems/SearchAreaInput'
import SearchMovieImage from '../../components/MovieSearchItems/SearchMovieImage'
import SearchMoviesCardItems from '../../components/MovieSearchItems/SearchMoviesCardItems'
import { INITIAL_STATE_M_SEARCH, MoviesSearchReducer } from '../../reducer/MoviesSearchReducer/moviesSearch.reducer'
import { getMovieSearch } from '../../reducer/MoviesSearchReducer/moviesSearch.action'



const MoviesSearch = () => {
  const {platformName} = useParams()
  const user = localStorage.getItem('userName')
  const [state, dispatch] = useReducer(MoviesSearchReducer, INITIAL_STATE_M_SEARCH)
  const {moviesSearch} = state;
  const nameMovieRef = useRef(null);
  const toast = useToast();
  const navigate = useNavigate()
  console.log(moviesSearch);
  
  useEffect(()=>{
    if(!user){
      window.location.href = '/'
    }
    getMovieSearch(platformName, dispatch) 
  },[user,platformName])

  return (
    <>
    {!moviesSearch.length && <Loading/>}
    {moviesSearch.length && (
        <Flex w="100%" minH="100svh" 
        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
        align="center"
        flexDir="var(--nsr-direction1)" 
        gap="var(--nsr-gap2)"
        pos="var(--nsr-pos1)"
        >
        <SearchAreaInput nameMovieRef={nameMovieRef} dispatch={dispatch}
        platformName={platformName} toast={toast}/>
         <Flex w="100%" minH="60svh" justify="center" wrap="wrap" >
          { moviesSearch.map((movie)=>(
            <Flex
            key={movie._id}
            direction="var(--nsr-direction1)"
            w={{ base: "120px", sm: "180px", md: "200px" }}
            h={{ base: "170px", sm: "220px", md: "250px" }}
            bg="var(--nsr-color22)"
            borderRadius="md"
            margin="var(--nsr-margin1)"
            padding="var(--nsr-padding1)"
            alignItems="center"
            pos="var(--nsr-pos1)"
            bgImage= "var(--nsr-bimage4)"
            style={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
          >
         <SearchMovieImage movie={movie}/>
         <Flex w="100%" h="30%" align="start" justifyContent="center">
          <SearchMoviesCardItems movie={movie} navigate={navigate}/>
          </Flex>
          </Flex>
          ))}

         </Flex>
        <GoBack goTo={`/movies/${platformName}`}/>
        <MenuComponent platform={platformName} place="MovieSearch" nameMovieRef={nameMovieRef} moviesSearch={moviesSearch}/>
        </Flex>
    )}
    </>
  )
}

export default MoviesSearch