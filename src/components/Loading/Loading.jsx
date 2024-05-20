import { Flex, Image } from '@chakra-ui/react';

const Loading = () => {
  return (
   <Flex w="100%" h="100svh" bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" align="center" justify="center">
    <Image src="/assets/loading.gif" w="100px" h="100px" />
   </Flex>
  )
}

export default Loading