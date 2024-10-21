import { Flex, Image } from "@chakra-ui/react";
import { customScrollStyles } from "../../../utils/MoviesFunctions/customScroll";
import TextMoviesCard from "./TextMoviesCard";
import {  handleClickIconInfoMovie } from "../../../utils/MoviesFunctions/movies";

import { handleClickCardImage } from "../../../reducer/MoviesReducer/movies.action";
import useMovies from "../../../services/useMovies";
import { handleClickButtonTrailer } from "../../../utils/Movie/MovieFunctions";

const MoviesCard = ({movies, place}) => { 

  const { navigate, indexAction, indexComedy, indexHorror, indexKids, indexReleases, dispatch, demo} = useMovies()
  console.log(demo);
  
  /*   useEffect(() =>{
        dispatch({type:"INDEX_ACTION", payload:0})
        dispatch({type:"INDEX_COMEDY", payload:0})
        dispatch({type:"INDEX_HORROR", payload:0})
        dispatch({type:"INDEX_KIDS", payload:0})
        dispatch({type:"INDEX_RELEASES",payload:0})  
    },[platformName]) */

  return (
    <>
     <Flex w={{ base: "100%", md: "600px", lg: "800px" }}
        h="15px"
        align="center"
        justify="space-around"
        fontWeight="var(--nsr-fweight1)"
        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
        mt="var(--nsr-margin4)"
        marginBottom="-25px"
       
      >
       <TextMoviesCard movies={movies} indexAction={indexAction} indexComedy={indexComedy} 
       indexHorror={indexHorror} indexKids={indexKids} indexReleases={indexReleases}/>
    
      </Flex>
      {movies.length && (
        <Flex
        w={{ base: "100%", md: "600px", lg: "800px" }}
        h={{ base: "200px", md: "300px", lg: "330px" }}
          overflowX="auto"
          direction="row"
          align="center"
          bgColor={movies[0].category === "Action" ? "var(--nsr-color7)"
            : movies[0].category === "Comedy" ? "var(--nsr-color8)"
            : movies[0].category === "Horror"? "var(--nsr-color9)"
            : movies[0].category === "Kids"? "var(--nsr-color10)"
            :movies[0].category === "Releases" ? "var(--nsr-color12)"
            :"var(--nsr-color11)"
          }
          mb="var(--nsr-margin2)"
          mt="var(--nsr-margin2)"
          bgImage="var(--nsr-bimage2)"
          outline="4px solid black"
          borderRadius="var(--nsr-bradius1)"
          sx={customScrollStyles}
         
        >
          {movies.map((movie, idx) => (
            <Flex
              key={movie._id}
              w={{ base: "120px", md: "160px", lg: "200px" }}
              h={{ base: "150px", md: "200px", lg: "250px" }}
              bgColor="#ff7a7a"
              flexShrink={0}
              margin="10px"
              borderRadius="10px"
              pos="relative"
            >
              <Image
                cursor="var(--nsr-pos1)"
                src={movie.image}
                alt={movie.name}
                w="100%"
                h="100%"
                outline="2px solid black"
                objectFit="cover"
                borderRadius="var(--nsr-bradius1)"
                transition="var(--nsr-transition)"
                _hover={{ transform: "scale(0.8)" }}
                onClick={() => 
                handleClickCardImage(idx, movie.category,dispatch)}
              />
               {!demo  ? (
                 <Image pos="var(--nsr-pos2)" src="/assets/informa.png"
                 w={{ base: "20px", md: "25px", lg: "30px" }}
                 h={{ base: "20px", md: "25px", lg: "30px" }} 
                bottom="10px" right="10px" cursor="var(--nsr-cursor1)"
                transition="var(--nsr-transition)"
                _hover={{ transform: "scale(1.1)" }}
                onClick={()=>{
                    handleClickIconInfoMovie(movie._id, navigate, place)
                }}
                />
               ):(
                <Image pos="var(--nsr-pos2)" src="/assets/claqueta1.png"
                w={{ base: "20px", md: "25px", lg: "30px" }}
                h={{ base: "20px", md: "25px", lg: "30px" }} 
               bottom="10px" right="10px" cursor="var(--nsr-cursor1)"
               transition="var(--nsr-transition)"
               _hover={{ transform: "scale(1.1)" }}
               onClick={()=>{
                   handleClickButtonTrailer(movie._id, movie.platform ,navigate, place)
               }}
               />
               )}
            </Flex>
          ))}
        </Flex>
      )}

    </>
  )
}
export default MoviesCard