import { Image } from "@chakra-ui/react"
import { handleClickPlatform } from "../../utils/PlatformsFunctions/platforms"
import { usePlatforms } from "../../services/usePlatforms"

const ImagesPlatform = ({navigate, platforms}) => {
    
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
        onClick={() => handleClickPlatform(platform.name, navigate)}
        transition="var(--nsr-transition)"
        _hover={{ transform: "scale(0.8)"}}
      />
    
    )}

         </>
  )
}

export default ImagesPlatform