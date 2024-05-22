import { Text } from "@chakra-ui/react"


const TextMoviesCard = ({movies, indexAction, indexComedy, indexHorror, indexKids}) => {
  return (
    <>
     <Text color="#4e2d1d" textTransform="uppercase">
          {movies[0].category === "Action" ? "ACTION" 
          : movies[0].category === "Comedy" ? "COMEDY" 
          : movies[0].category === "Horror" ? "HORROR"
          : movies[0].category === "Kids"? "KIDS" : ""}
        </Text>
        <Text color="white">
            {movies[0].category === "Action"
             ? movies[indexAction].name
              : movies[0].category === "Comedy"
             ? movies[indexComedy].name
              : movies[0].category === "Horror"
             ? movies[indexHorror].name
              : movies[0].category === "Kids"
             ? movies[indexKids].name
              : ""}
        </Text>
    </>
  )
}

export default TextMoviesCard