import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Flex, Text } from "@chakra-ui/react";
import GoBack from "../../components/GoBack/GoBack";
import { fetchMovies } from "../../reducer/movies.action";
import MoviesCard from "../../components/Movies/MoviesCard/MoviesCard";
import MenuComponent from "../../components/Menu/Menu";


const Movies = () => {
  const { platformName } = useParams();
  const [moviesAction, setMoviesAction] = useState([]);
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [moviesKids, setMoviesKids] = useState([]);
  console.log(platformName);
  
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
          <Text fontSize="40px" fontWeight="bold" color="white" mt="20px" 
          textShadow="4px 4px 2px rgba(0,0,0,0.6)">
            {platformName} Movies
          </Text>
       <MoviesCard moviesAction={moviesAction} moviesComedy={moviesComedy}
        moviesHorror={moviesHorror} moviesKids={moviesKids} platformName={platformName}/>
        </Flex>
      )}  
      <GoBack goTo="/platforms"/>
      <MenuComponent/>
    </>
  );
};
export default Movies;

