import { Image, Text } from "@chakra-ui/react"
import { handleClickIconInfoMovie } from "../../utils/MoviesFunctions/movies"


const SearchMoviesCardItems = ({movie, navigate}) => {
  return (
    <>
     <Text color="white" mt="10px" textAlign="center" fontSize={{ base: "11px", sm: "14px", md: "15px" }} userSelect="none"
     overflow="hidden"
     whiteSpace="nowrap"
     textOverflow="ellipsis"
     >
              {movie.name}
            </Text>
            <Image src='/assets/info3.png'
              w={{ base: "20px", sm: "25px", md: "30px" }}
              h={{ base: "20px", sm: "25px", md: "30px" }}
              pos="absolute" cursor="pointer" 
            bottom="5px" left="45%"
            transition="all 0.5s"
            _hover={{transform:"scale(1.2)"}}
            onClick={()=>{
              handleClickIconInfoMovie(movie._id, navigate)
            }}
            />
    </>
  )
}

export default SearchMoviesCardItems
