import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Divider, Flex, Text } from "@chakra-ui/react";
import GoBack from "../../components/GoBack/GoBack";
import MoviesCard from "../../components/Movies/MoviesCard/MoviesCard";
import MenuComponent from "../../components/MenuItems/Menu";
import AllMoviesText from "../../components/Movies/MoviesCard/AllMoviesText";
import { fetchMovies } from "../../reducer/MoviesReducer/movies.action";
import { INITIAL_STATE_MOVIES, moviesReducer } from "../../reducer/MoviesReducer/movies.reducer";

const Movies = () => {
  const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE_MOVIES)
  const {indexAction, indexComedy, indexHorror, indexKids, moviesAction, moviesComedy, moviesHorror, moviesKids }= state;
  const { platformName } = useParams();
  const user = localStorage.getItem('userName'); 

  useEffect(() => {
    if (!user) {
      window.location.href = "/"; 
      return;
    }
    fetchMovies(platformName, dispatch)
  }, [platformName, user]);

  return (
    <>
      {!moviesAction.length && !moviesComedy.length && !moviesHorror.length && !moviesKids.length && <Loading />}
      {(moviesAction.length || moviesComedy.length || moviesHorror.length || moviesKids.length) && (
        <Flex direction="var(--nsr-direction1)"w="100%" minH="100svh" align="center" justify="center" pos="var(--nsr-pos1)"
        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"  gap="var(--nsr-gap2)" userSelect="none">
          <Flex flexDir="var(--nsr-direction1)" gap="var(--nsr-gap2)" bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
           w="100%" align="center" pos="sticky" top="0" zIndex="1" opacity="var(--nsr-opacity1)">
          <Text fontWeight="var(--nsr-fweight1)" color="var(--nsr-color1)" mt="var(--nsr-margin6)" 
          textShadow="4px 4px 2px rgba(0,0,0,0.6)" userSelect="var(--nsr-userSelect)" fontSize={["24px", "30px", "36px", "46px"]} >
            {platformName} Movies
          </Text>
        <AllMoviesText platformName={platformName}/>  
        </Flex>
       <MoviesCard movies={moviesAction} platformName={platformName}indexAction={indexAction} dispatch={dispatch}/>
       <Divider w="80%"/>
       <MoviesCard movies={moviesComedy} platformName={platformName} indexComedy={indexComedy} dispatch={dispatch}/> 
       <Divider w="80%"/>
       <MoviesCard movies={moviesHorror} platformName={platformName} indexHorror={indexHorror} dispatch={dispatch}/> 
       <Divider w="80%"/>
       <MoviesCard movies={moviesKids} platformName={platformName} indexKids={indexKids} dispatch={dispatch}/> 
        </Flex>
      )}  
      <GoBack goTo="/platforms"/>
      <MenuComponent platform={platformName} place="Movies" moviesAction={moviesAction}/>
    </>
  );
};
export default Movies;

