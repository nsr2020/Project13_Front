import { Text } from "@chakra-ui/react"


const TextMoviesCard = ({movies, indexAction, indexComedy, indexHorror, indexKids}) => {
  return (
    <>
     <Text color="var(--nsr-color12)" textTransform="uppercase" 
     userSelect="var(--nsr-userSelect)" 
     fontSize={["14px", "20px", "20px", "20px"]}>
          {movies[0].category === "Action" ? "ACTION" 
          : movies[0].category === "Comedy" ? "COMEDY" 
          : movies[0].category === "Horror" ? "HORROR"
          : movies[0].category === "Kids"? "KIDS" : ""}
        </Text>
        <Text color="var(--nsr-color1)" userSelect="var(--nsr-userSelect)" 
        fontSize={["10px", "15px", "15px", "15px"]}>
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