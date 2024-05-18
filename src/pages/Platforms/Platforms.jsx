import { Box, Image } from "@chakra-ui/react"
import BgGradient from "../../components/StarPage/BgStartPage/BgGradient"
import { useNavigate } from "react-router";
import { useEffect } from "react";



const Platforms = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("userName");

useEffect(()=>{
  if(user === null){
    navigate("/")
    return
  }
},[user, navigate])

    const handleClick = (platformName) => {
      console.log(platformName);
      navigate(`/movies/${platformName}`);
    }
  return (
    <BgGradient>
     
     <Box display="flex" gap='100px' transition="all 0.5s">
      <Image
        src="/assets/hbologo.jpg"
        w="180px"
        h="180px"
        borderRadius="50%"
        border="2px groove red"
        cursor="pointer"
        onClick={() => handleClick("Hbo Max")}
        transition="all 0.5s"
        _hover={{ transform: "scale(0.8)"}}
      />
      <Image
        src="/assets/netflixlogo.jpg"
        w="180px"
        h="180px"
        borderRadius="50%"
        border="2px groove red"
        cursor="pointer"
        transition="all 0.5s"
        onClick={() => handleClick("Netflix")}
        _hover={{ transform: "scale(0.8)"}}
      />
      <Image
        src="/assets/primelogo.jpg"
        w="180px"
        h="180px"
        borderRadius="50%"
        border="2px groove red"
        cursor="pointer"
        transition="all 0.5s"
        onClick={() => handleClick("Prime Video")}
        _hover={{ transform: "scale(0.8)"}}
      />
    </Box>
    </BgGradient>
  )
}

export default Platforms