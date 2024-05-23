import { Image, Text } from "@chakra-ui/react"
import { handleClickIconInfoMovie } from "../../utils/MoviesFunctions/movies"


const SearchMoviesCardItems = ({movie, navigate}) => {
  return (
    <>
     <Text color="white" mt="10px" textAlign="center" fontSize="14px" userSelect="none">
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
    </>
  )
}

export default SearchMoviesCardItems
