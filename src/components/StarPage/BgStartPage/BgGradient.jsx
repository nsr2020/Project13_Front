import React from 'react';
import { Flex } from '@chakra-ui/react';

const BgGradient = ({children}) => {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      minH="100vh"
      bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
    >
     {children}
    </Flex>
  );
};

export default BgGradient;
