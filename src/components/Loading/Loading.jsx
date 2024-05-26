import { Flex, Image } from '@chakra-ui/react';

const Loading = () => {
  return (
   <Flex w="100%" h="100svh" bgGradient="linear(to-br, var(--nsr-color13), var(#ec008c), var(#005caf))" align="center" justify="center">
    <Image src="/assets/loading.gif" w="100px" h="100px" />
   </Flex>
  )
}

export default Loading