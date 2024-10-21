import { Button, Flex } from '@chakra-ui/react'
import ReactPlayer from 'react-player/youtube'
import GoBack from '../../components/GoBack/GoBack'
import { useTrailer } from '../../services/useTrailer'
import GoMovies from '../../components/GoMovies/GoMovies'

const Trailers = () => {
  const { trailer,playing,gif,handlePlay,place,demo,platformName}= useTrailer()
  return (
    <Flex align="center" justify="center" width="100%" minH="100svh" flexDir="column" gap="20px" 
    bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)">
    <ReactPlayer url={trailer?.trailer} width="95%" height="70svh" 
    style={{ marginTop:"100px" }} 
    light={gif?.gif}
    playing={playing}
    config={{
      youtube: {
        playerVars: { controls: 0, autoplay: 0, modestbranding: 1 }
      }
    }}
    />
    <Flex align="center" justify="center">
      <Button 
      bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
       color="var(--nsr-color1)" 
       _hover={{
        transform: "scale(0.9)",
        color:"var(--nsr-color6)",
        transition: "var(--nsr-transition)"
      }}
      onClick={()=>{
        handlePlay()
      }}>PLAY / STOP</Button>
    </Flex>
    {!demo ? <GoBack goTo={`/movie/${trailer?._id}/${place}`}/>
    :
    <GoMovies goTo={`/movies/${platformName}`}/>
    }
    </Flex>
  )
}

export default Trailers