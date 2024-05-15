import { Image } from "@chakra-ui/react";
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

const ImageStartPage = () => {
  return (
   <>
      <Image
        src="/assets/star1.png"
        alt="starIcon"
        w="40px"
        h="40px"
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
        position="absolute"
        bottom="10px"
        left="30px"
        opacity="0"
        animation={`${slideFromLeft} 2s ease forwards`}
        style={{ animationDelay: "0.5s" }} 
      />
 </>
  );
};

export default ImageStartPage;
