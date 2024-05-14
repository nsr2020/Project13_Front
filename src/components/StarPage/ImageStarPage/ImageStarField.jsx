import { Image, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const slideFromLeft = keyframes`
  from {
    transform: translateX(1000px);
    opacity: 1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(-500px);
    opacity: 1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const ImageStarField = () => {
  return (
   <>
      <Image
        src="/assets/star1.png"
        alt="starIcon"
        w="50px"
        h="50px"
        position="absolute"
        top="20px"
        right="20px"
        opacity="0"
        animation={`${slideFromRight} 2s ease forwards`}
      />
      <Image
        src="/assets/star1.png"
        alt="starIcon"
        w="50px"
        h="50px"
        position="absolute"
        bottom="20px"
        left="20px"
        opacity="0"
        animation={`${slideFromLeft} 2s ease forwards`}
        style={{ animationDelay: "0.5s" }} 
      />
 </>
  );
};

export default ImageStarField;
