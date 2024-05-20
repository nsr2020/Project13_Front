import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ImagesPlatform from "../../components/Platforms/ImagesPlatform";
import { useNavigate } from "react-router";
import TitlePlatform from "../../components/Platforms/TitlePlatform";
import Loading from "../../components/Loading/Loading";

const Platforms = () => {
  const navigate = useNavigate()
  const [platforms, setPlatforms] = useState([])
  const user = localStorage.getItem("userName");

useEffect(()=>{
  if(user === null){
    navigate("/")
    }
    setTimeout(()=>{
      fetch("https://project-13-back.vercel.app/api/v1/platforms")
      .then((res)=> res.json())
      .then((data)=> setPlatforms(data))
      },500)
    
  
},[user])
 
return (
  <>
    {!platforms.length && <Loading />}
    {platforms.length && (
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100svh"
        gap="120px"
        transition="all 0.5s"
        bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"
      >
        <TitlePlatform />
        <Box display="flex" gap="100px" transition="all 0.5s">
          <ImagesPlatform navigate={navigate} platforms={platforms} />
        </Box>
      </Flex>
    )}
  </>
);
}

export default Platforms