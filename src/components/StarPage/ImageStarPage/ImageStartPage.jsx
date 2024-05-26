import { Image } from "@chakra-ui/react";
import { slideFromLeft, slideFromRight } from "../../../utils/StarPage/StarPageFunctions";

const ImageStartPage = () => {
  return (
   <>
      <Image
        src="/assets/star1.png"
        alt="starIcon"
        w="40px"
        h="40px"
        minW="20px"
        position="absolute"
        top="30px"
        right="30px"
        opacity="0"
        animation={`${slideFromRight} 2s ease forwards`}
      />
      <Image
        src="/assets/star1.png"
        alt="starIcon"
        w="40px"
        h="40px"
        minW="20px"
        position="absolute"
        bottom="30px"
        left="30px"
        opacity="0"
        animation={`${slideFromLeft} 2s ease forwards`}
        style={{ animationDelay: "0.5s" }} 
      />
 </>
  );
};

export default ImageStartPage;
