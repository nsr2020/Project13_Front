import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Divider, Flex, Text } from "@chakra-ui/react";
import GoBack from "../../components/GoBack/GoBack";
import { fetchMovies } from "../../reducer/movies.action";
import MoviesCard from "../../components/Movies/MoviesCard/MoviesCard";
import MenuComponent from "../../components/MenuItems/Menu";
import SearchMovies from "../../components/Movies/MoviesCard/SearchMovies";

const Movies = () => {
  const { platformName } = useParams();
  const [moviesAction, setMoviesAction] = useState([]);
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [moviesKids, setMoviesKids] = useState([]);
  
  const user = localStorage.getItem('userName'); 

  useEffect(() => {
    if (!user) {
      window.location.href = "/"; 
      return;
    }
    fetchMovies(setMoviesAction, setMoviesComedy, setMoviesHorror, setMoviesKids, platformName)
  }, [platformName, user]);

  return (
    <>
      {!moviesAction.length && !moviesComedy.length && !moviesHorror.length && !moviesKids.length && <Loading />}
      {(moviesAction.length || moviesComedy.length || moviesHorror.length || moviesKids.length) && (
        <Flex direction="column" w="100%" minH="100svh" align="center" justify="center" pos="relative"
        bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" gap="20px">
          <Text fontSize="40px" fontWeight="bold" color="white" mt="40px" 
          textShadow="4px 4px 2px rgba(0,0,0,0.6)" userSelect="none">
            {platformName} Movies
          </Text>
        <SearchMovies platformName={platformName}/>  
       <MoviesCard movies={moviesAction} platformName={platformName}/>
       <Divider w="80%"/>
       <MoviesCard movies={moviesComedy} platformName={platformName}/> 
       <Divider w="80%"/>
       <MoviesCard movies={moviesHorror} platformName={platformName}/> 
       <Divider w="80%"/>
       <MoviesCard movies={moviesKids} platformName={platformName}/> 
        </Flex>
      )}  
      <GoBack goTo="/platforms"/>
      <MenuComponent platform={platformName} place="Movies"/>
    </>
  );
};
export default Movies;

