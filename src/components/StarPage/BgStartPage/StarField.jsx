import React from 'react';
import { Flex } from '@chakra-ui/react';

const StarField = ({children}) => {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      h="100vh"
      bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"
    >
     {children}
    </Flex>
  );
};

export default StarField;
