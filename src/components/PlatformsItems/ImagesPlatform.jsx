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
        w={{ base: "75px", md: "120px", lg: "150px", xl: "180px" }}
        h={{ base: "75px", md: "120px", lg: "150px", xl: "180px" }}
        borderRadius="50%"
        border="2px groove red"
        cursor="var(--nsr-cursor1)"
        onClick={() => handleClickPlatform(platform.name)}
        transition="var(--nsr-transition)"
        _hover={{ transform: "scale(0.8)"}}
      />
    
    )}

         </>
  )
}

export default ImagesPlatform