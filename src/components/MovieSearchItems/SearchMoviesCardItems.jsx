import { Image, Text } from "@chakra-ui/react"
import { handleClickIconInfoMovie } from "../../utils/MoviesFunctions/movies"

const SearchMoviesCardItems = ({movie, navigate}) => {
  return (
    <>
     <Text color="var(--nsr-color1)" mt="var(--nsr-margin1)" textAlign="center" 
     fontSize={{ base: "11px", sm: "14px", md: "15px" }} userSelect="var(--nsr-userSelect)"
     overflow="hidden"
     whiteSpace="nowrap"
     textOverflow="ellipsis"
     >
              {movie.name}
            </Text>
            <Image src='/assets/info3.png'
              w={{ base: "20px", sm: "25px", md: "30px" }}
              h={{ base: "20px", sm: "25px", md: "30px" }}
              pos="var(--nsr-pos2)" cursor="var(--nsr-cursor1)" 
            bottom="5px" left="45%"
            transition="var(--nsr-transition)"
            _hover={{transform:"scale(1.2)"}}
            onClick={()=>{
              handleClickIconInfoMovie(movie._id, navigate,)
            }}
            />
    </>
  )
}

export default SearchMoviesCardItems
