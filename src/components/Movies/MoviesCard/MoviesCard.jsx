import { Flex, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { customScrollStyles } from "../../../utils/MoviesFunctions/customScroll";
import TextMoviesCard from "./TextMoviesCard";
import { handleClickCardImage, handleClickIconInfoMovie } from "../../../utils/MoviesFunctions/movies";
import { useNavigate } from "react-router";

const MoviesCard = ({movies, platformName}) => { 
    const [indexAction, setIndexAction] = useState(0);
    const [indexComedy, setIndexComedy] = useState(0);
    const [indexHorror, setIndexHorror] = useState(0);
    const [indexKids, setIndexKids] = useState(0);
    const navigate = useNavigate()

    useEffect(() =>{
        setIndexAction(0)
        setIndexComedy(0)
        setIndexHorror(0)
        setIndexKids(0)
    },[platformName])

  
  return (
    <>
     <Flex w="700px"
        h="15px"
        align="center"
        justify="space-between"
        fontWeight="bolder"
        fontSize="20px"
        mt="40px"
        marginBottom="-25px"
       
      >
       <TextMoviesCard movies={movies} indexAction={indexAction} indexComedy={indexComedy} 
       indexHorror={indexHorror} indexKids={indexKids}/>
    
      </Flex>
      {movies.length && (
        <Flex
          w="800px"
          h="330px"
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
              w="200px"
              h="250px"
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
                handleClickCardImage(idx, movie.category, setIndexAction, setIndexComedy, setIndexHorror, setIndexKids)}
              />
                <Image pos="absolute" src="/assets/informa.png" w="30px" 
                h="30px" bottom="10px" right="10px" cursor="pointer"
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