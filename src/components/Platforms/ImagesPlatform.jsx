import { Image } from "@chakra-ui/react"

const ImagesPlatform = ({navigate, platforms}) => {
    
    const handleClickPlatform = (platformName) => {
       
        navigate(`/movies/${platformName}`);
      }
  return (
    <>
     {platforms.map((platform) =>
        <Image
        key={platform._id}
        src={platform.image}
        w="180px"
        h="180px"
        borderRadius="50%"
        border="2px groove red"
        cursor="pointer"
        onClick={() => handleClickPlatform(platform.name)}
        transition="all 0.5s"
        _hover={{ transform: "scale(0.8)"}}
      />
    
    )}

         </>
  )
}

export default ImagesPlatform