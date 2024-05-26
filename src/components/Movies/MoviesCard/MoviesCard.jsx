import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { customScrollStyles } from "../../../utils/MoviesFunctions/customScroll";
import TextMoviesCard from "./TextMoviesCard";
import {  handleClickIconInfoMovie } from "../../../utils/MoviesFunctions/movies";
import { useNavigate } from "react-router";
import { handleClickCardImage } from "../../../reducer/MoviesReducer/movies.action";

const MoviesCard = ({movies, platformName, indexAction, indexComedy, indexHorror, indexKids, dispatch}) => { 
    const navigate = useNavigate()
    useEffect(() =>{
        dispatch({type:"INDEX_ACTION", payload:0})
        dispatch({type:"INDEX_COMEDY", payload:0})
        dispatch({type:"INDEX_HORROR", payload:0})
        dispatch({type:"INDEX_KIDS", payload:0})  
    },[platformName])

  return (
    <>
     <Flex w={{ base: "100%", md: "600px", lg: "800px" }}
        h="15px"
        align="center"
        justify="space-around"
        fontWeight="bolder"
        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
        mt="40px"
        marginBottom="-25px"
       
      >
       <TextMoviesCard movies={movies} indexAction={indexAction} indexComedy={indexComedy} 
       indexHorror={indexHorror} indexKids={indexKids}/>
    
      </Flex>
      {movies.length && (
        <Flex
        w={{ base: "100%", md: "600px", lg: "800px" }}
        h={{ base: "200px", md: "300px", lg: "330px" }}
          overflowX="auto"
          direction="row"
          align="center"
          bgColor={movies[0].category === "Action" ? "#F0B66B"
            : movies[0].category === "Comedy" ? "#0B7072"
            : movies[0].category === "Horror"? "#EFE081"
            : movies[0].category === "Kids"? "#F1713F"
            :"#87C19B"
          }
          mb="20px"
          mt="20px"
          bgImage="url('https://www.transparenttextures.com/patterns/brick-wall.png')"
          outline="4px solid black"
          borderRadius="10px"
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
                cursor="pointer"
                src={movie.image}
                alt={movie.name}
                w="100%"
                h="100%"
                outline="2px solid black"
                objectFit="cover"
                borderRadius="10px"
                transition="all 0.5s"
                _hover={{ transform: "scale(0.8)" }}
                onClick={() => 
                handleClickCardImage(idx, movie.category,dispatch)}
              />
                <Image pos="absolute" src="/assets/informa.png"
                 w={{ base: "20px", md: "25px", lg: "30px" }}
                 h={{ base: "20px", md: "25px", lg: "30px" }} 
                bottom="10px" right="10px" cursor="pointer"
                transition="all 0.5s"
                _hover={{ transform: "scale(1.1)" }}
                onClick={()=>{
                    handleClickIconInfoMovie(movie._id, navigate)
                }}
                />
            </Flex>
          ))}
        </Flex>
      )}

    </>
  )
}
export default MoviesCard