import { Button, Flex, scaleFadeConfig } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router'
import GoBack from '../../components/GoBack/GoBack'

const Trailers = () => {
  const [trailer, setTrailer] = useState()
  const [playing, setPlaying] = useState(false)
  const {id} = useParams()
  const user = localStorage.getItem("userName")

  const handlePlay = () =>{
    setPlaying(!playing)
  }

  useEffect(()=>{
    if(!user){
      navigate("/")
      return
    }
    fetch(`https://project-13-back.vercel.app/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data =>{
      setTrailer(data)
    
    });
  },[user])

  return (
    <Flex align="center" justify="center" width="100%" minH="100svh" flexDir="column" gap="20px" 
    bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)">
    <ReactPlayer url={trailer?.trailer} width="95%" height="70svh" 
    style={{ marginTop:"100px" }} light={
      trailer?.platform === "Netflix" ? "/assets/netflixgif.gif"
      : trailer?.platform === "Prime Video" ? "/assets/prime-video.gif"
      : trailer?.platform === "Hbo Max" ? "/assets/hbogif.gif" : ""
    }
    playing={playing}
    config={{
      youtube: {
        playerVars: { controls: 0, autoplay: 0, modestbranding: 1 }
      }
    }}
    />
    <Flex align="center" justify="center">
      <Button bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" color="white" 
       _hover={{
        transform: "scale(0.9)",
        color:"black",
        transition: "transform 0.2s"
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