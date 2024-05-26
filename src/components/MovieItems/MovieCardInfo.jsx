import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Rate } from "antd"
import { useNavigate } from "react-router";
import { customStyle, handleClickButtonTrailer } from "../../utils/Movie/MovieFunctions";

const MovieCardInfo = ({movie}) => {
    const navigate = useNavigate();
  return (
    <>
     <Card maxW='100%' minH="100svh" bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"  >
      <CardBody display="flex" flexDir="column" alignItems="center" justifyContent="center" mt="40px">
        <Image
          src={movie?.image}
          borderRadius='lg'
          w={{ base: "200px", md: "400px", lg: "500px" }}
          h={{ base: "200px", md: "400px", lg: "500px" }}
        />
        <Stack mt='6' spacing='3' display="flex" align="center" justifyContent="center">
          <Heading fontSize={{ base: "12px", md: "md", lg: "lg" }} textTransform="uppercase"
          color="white" userSelect="none">{movie?.name}</Heading>
          <Text color="yellow" userSelect="none" textAlign="center" fontSize={{ base: "12px", md: "md", lg: "lg" }}>
           This movie from {movie?.platform} belongs to category of {movie?.category}
          </Text>
          <Rate
        disabled
        defaultValue={movie.stars}
        style={customStyle}
        character={({ index }) => (
          <span style={index + 1 <= movie.stars ? { color: '#faad14' } : { color: '#d1d1d1' }}>★</span>
        )}
      />
        </Stack>
      </CardBody>
      <Divider  />
      <CardFooter display="flex" align="center" justify="center" >
          <Button variant='solid' colorScheme='teal'
          onClick={()=>{
            handleClickButtonTrailer(movie._id, navigate);
          }}
          >
            Watch Trailer
          </Button> 
      </CardFooter>
    </Card>
    </>
  )
}

export default MovieCardInfo