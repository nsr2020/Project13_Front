import { Button, Flex } from '@chakra-ui/react'
import { useEffect, useReducer } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router'
import GoBack from '../../components/GoBack/GoBack'
import { INITIAL_STATE_TRAILER, trailerReducer } from '../../reducer/TrailerReducer/trailer.reducer'
import { fetchGif, fetchTrailer } from '../../reducer/TrailerReducer/trailer.action'

const Trailers = () => {
  const [state, dispatch] = useReducer(trailerReducer, INITIAL_STATE_TRAILER)
  const {trailer, playing , gif}= state;
  const {id, platformName} = useParams()
  const user = localStorage.getItem("userName")

  const handlePlay = () =>{
    dispatch({type:"SET_PLAYING"})
  }

  useEffect(()=>{
    if(!user){
      navigate("/")
      return
    }
    fetchTrailer(id,dispatch)
    fetchGif(platformName,dispatch)
  },[user])

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
    <GoBack goTo={`/movie/${trailer?._id}`} />
    </Flex>
  )
}

export default Trailers