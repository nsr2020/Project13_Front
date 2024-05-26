import { keyframes } from "@chakra-ui/react";

export const slideFromLeft = keyframes`
  from {
    transform: translateX(1000px);
    opacity: 1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const slideFromRight = keyframes`
  from {
    transform: translateX(-500px);
    opacity: 1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;