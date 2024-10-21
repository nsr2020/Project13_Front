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
      /* bgImage={"url('/assets/aven1.jpg')"}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPos='center' */
    >
     {children}
    </Flex>
  );
};

export default BgGradient;
