import { Button, Divider, Flex, Image, Input, Text, useToast} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import GoBack from '../../components/GoBack/GoBack'
import MenuComponent from '../../components/MenuItems/Menu'
import Loading from '../../components/Loading/Loading'
import { getMovieSearch } from '../../utils/MoviesSearch/movieSearchFuntions'
import { handleClickIconInfoMovie } from '../../utils/MoviesFunctions/movies'
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons'


const MoviesSearch = () => {
  const {platformName} = useParams()
  const user = localStorage.getItem('userName')
  const [moviesSearch, setMoviesSearch] = useState([])
  const nameMovieRef = useRef(null);
  const toast = useToast();
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!user){
      window.location.href = '/'
    }
    getMovieSearch(platformName, setMoviesSearch) 
  },[user,platformName])

  const handleInputMovieSearch = () => {
    const nameMovie = nameMovieRef.current.value;
    if(!nameMovie){
      let noMovies = false
      getMovieSearch(platformName, setMoviesSearch, noMovies)
      return
    }
   
    fetch(`https://project-13-back.vercel.app/api/v1/movies/name/${nameMovie}`)
    .then(response =>response.json())
    .then(data =>{
      setMoviesSearch(data)
      if (!data.length) {
        let noMovies = true;
        getMovieSearch(platformName, setMoviesSearch, noMovies, toast);
      }
     
    })
    
  }
  const handleCleanInputMovieSearch = () => {
    getMovieSearch(platformName, setMoviesSearch) 
    nameMovieRef.current.value = ''
  }

  return (
    <>
    {!moviesSearch.length && <Loading/>}
    {moviesSearch.length && (
        <Flex w="100%" minH="100svh" bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" align="center"flexDir="column" 
        gap="20px"
        >
          <Flex w="80%" align="center" justify="center">
         <Input w="40%"  mt="40px" id='name' ref={nameMovieRef} type='text'
         placeholder="Busca por nombre o por letra"
         bg="black"
      color="white"
      _placeholder={{ color: 'white' }}
         />
         </Flex>
         <Flex w="80%" align="center" justify="center" gap="40px">
         <Button onClick={handleInputMovieSearch}
         _hover={{transform:"scale(1.2)", transition:"all 0.5s"}}
         leftIcon={<SearchIcon />}
         >Search</Button>
         <Button onClick={handleCleanInputMovieSearch}
         _hover={{transform:"scale(1.2)", transition:"all 0.5s"}}
         leftIcon={<DeleteIcon />}
         >CleanFilter</Button>  
         </Flex>
         <Divider w="80%"/>
         <Flex w="90%" minH="100svh" justify="center" wrap="wrap">
          { moviesSearch.map((movie)=>(
            <Flex
            key={movie._id}
            direction="column"
            w="200px"
            h="300px"
            bg="grey"
            borderRadius="md"
            margin="10px"
            padding="10px"
            alignItems="center"
            pos="relative"
            bgImage= "url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)"
            style={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
          >
            <Image
              src={movie.image}
              alt={movie.name}
              w="70%"
              h="70%"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.5s"
              cursor="pointer"
              _hover={{transform:"scale(0.8) rotate(30deg)"}}
            />
            <Text color="white" mt="10px" textAlign="center" fontSize="14px">
              {movie.name}
            </Text>
            <Image src='/assets/info3.png' w="40px" h="40px" pos="absolute" cursor="pointer" 
            bottom="10px" right="10px"
            transition="all 0.5s"
            _hover={{transform:"scale(1.2)"}}
            onClick={()=>{
              handleClickIconInfoMovie(movie._id, navigate)
            }}
            />
          </Flex>
          ))}
         </Flex>
        <GoBack goTo={`/movies/${platformName}`}/>
        <MenuComponent platform={platformName} place="MovieSearch"/>
        </Flex>
    )}
    </>
  )
}

export default MoviesSearch