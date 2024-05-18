import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Flex, Image, Text } from "@chakra-ui/react";
import GoBack from "../../components/GoBack/GoBack";


const Movies = () => {
  const { platformName } = useParams();
  const [moviesAction, setMoviesAction] = useState([]);
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [moviesKids, setMoviesKids] = useState([]);
  const user = localStorage.getItem('userName');  
  const categories = ["Action", "Comedy", "Horror", "Kids"];

  useEffect(() => {
    if (!user) {
      window.location.href = "/"; 
      return;
    }

    const fetchMovies = async () => {
      try {
        const fetchPromises = categories.map(category =>
          fetch(`http://localhost:3000/api/v1/movies/platform_category/${platformName}/${category}`)
            .then(response => response.json())
        );

        const [actionMovies, comedyMovies, horrorMovies, kidsMovies] = await Promise.all(fetchPromises);

        setMoviesAction(actionMovies);
        setMoviesComedy(comedyMovies);
        setMoviesHorror(horrorMovies);
        setMoviesKids(kidsMovies);
        console.log(moviesAction);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

 

  return (
    <>
      {!moviesAction.length && !moviesComedy.length && !moviesHorror.length && !moviesKids.length && <Loading />}
      {(moviesAction.length || moviesComedy.length || moviesHorror.length || moviesKids.length) && (
        <Flex direction="column" w="100%" minH="100svh" align="center" justify="center" pos="relative"
        bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" gap="20px">
          <Text fontSize="30px" fontWeight="bold" color="white" mt="20px">
            {platformName} Movies
          </Text>
          {moviesAction.length > 0 && (
            <Flex w="600px" h="300px" overflowX="auto" direction="row" 
            align="center"  bgColor="red" mb="20px" mt="20px"  outline="4px solid black" borderRadius="10px">
              <Text pos="absolute" top="70px" left="30%" fontWeight="bold" >{moviesAction[0].category}</Text>
              <Text pos="absolute" top="70px" right="30%" fontWeight="bold" > {moviesAction[0].name}</Text>
              {moviesAction.map((movie) => (
                <Flex key={movie._id} w="200px" h="200px" bgColor="red" flexShrink={0} margin="10px" borderRadius="10px">
                  <Image cursor="pointer" src={movie.image} alt={movie.name} w="100%" h="100%" 
                  objectFit="contain" borderRadius="10px" transition="all 0.5s"
                  _hover={{ transform: "scale(0.8)"}} />
                </Flex>
              ))}
            </Flex>
          )}
          {moviesComedy.length > 0 && (
            <Flex w="600px" h="300px" overflowX="auto" direction="row" align="center"  bgColor="green" mb="20px">
              {moviesComedy.map((movie) => (
                <Flex key={movie._id} w="200px" h="200px" bgColor="green" flexShrink={0} margin="10px" borderRadius="10px">
                  <Image src={movie.image} alt={movie.name} w="100%" h="100%" objectFit="contain" borderRadius="10px" />
                </Flex>
              ))}
            </Flex>
          )}
          {moviesHorror.length > 0 && (
            <Flex w="600px" h="300px" overflowX="auto" direction="row" align="center"  bgColor="blue" mb="20px">
              {moviesHorror.map((movie) => (
                <Flex key={movie._id} w="200px" h="200px" bgColor="blue" flexShrink={0} margin="10px" borderRadius="10px">
                  <Image src={movie.image} alt={movie.name} w="100%" h="100%" objectFit="contain" borderRadius="10px" />
                </Flex>
              ))}
            </Flex>
          )}
          {moviesKids.length > 0 && (
            <Flex w="600px" h="300px" overflowX="auto" direction="row" align="center"  bgColor="yellow" mb="20px">
              {moviesKids.map((movie) => (
                <Flex key={movie._id} w="200px" h="200px" bgColor="yellow" flexShrink={0} margin="10px" borderRadius="10px" overflow="hidden">
                  <Image src={movie.image} alt={movie.name} w="100%" h="100%" objectFit="contain" 
                  borderRadius="10px" transition="all 0.5s"
                  _hover={{ transform: "scale(0.8)"}}/>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      )}
      <GoBack goto="/platforms"/>
    </>
  );
};

export default Movies;

