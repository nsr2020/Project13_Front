import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Rate } from "antd"
import { useNavigate } from "react-router";
import { handleClickButtonTrailer } from "../../utils/Movie/MovieFunctions";

const MovieCardInfo = ({movie}) => {
    const navigate = useNavigate();

  return (
    <>
     <Card maxW='100%' minH="100svh" bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)">
      <CardBody display="flex" flexDir="column" alignItems="center">
        <Image
          src={movie?.image}
          borderRadius='lg'
          w="500px"
          h="500px"
        />
        <Stack mt='6' spacing='3' display="flex" align="center">
          <Heading size='md' color="white">{movie?.name}</Heading>
          <Text color="yellow">
           This movie from {movie?.platform} belongs to category of {movie?.category}
          </Text>
          <Rate disabled defaultValue={movie?.stars} />
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