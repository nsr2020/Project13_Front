import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ImagesPlatform from "../../components/PlatformsItems/ImagesPlatform";
import { useNavigate } from "react-router";
import TitlePlatform from "../../components/PlatformsItems/TitlePlatform";
import Loading from "../../components/Loading/Loading";
import { urlPlatforms } from "../../utils/infoFetchUrl/fetchUrl";

const Platforms = () => {
  const navigate = useNavigate()
  const [platforms, setPlatforms] = useState([])
  const user = localStorage.getItem("userName");

useEffect(()=>{
  if(user === null){
    navigate("/")
    }
      fetch(urlPlatforms)
      .then((res)=> res.json())
      .then((data)=> setPlatforms(data))
    
},[user])
 
return (
  <>
    {!platforms.length && <Loading />}
    {platforms.length && (
      <Flex
        direction="var(--nsr-direction1)"
        align="center"
        justify="center"
        w="100%"
        h="100svh"
        gap="120px"
        transition="var(--nsr-transition)"
        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
      >
        <TitlePlatform />
        <Box display="flex"
         gap={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }} 
         transition="var(--nsr-transition)">
          <ImagesPlatform navigate={navigate} platforms={platforms} />
        </Box>
      </Flex>
    )}
  </>
);
}

export default Platforms