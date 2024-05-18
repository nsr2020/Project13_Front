import { Flex, Image } from '@chakra-ui/react';

const Loading = () => {
  return (
   <Flex w="100%" h="100svh" bgGradient="linear(to-r, blue.400, green.400, blue.400)" align="center" justify="center">
    <Image src="/assets/loading.gif" w="100px" h="100px" />
   </Flex>
  )
}

export default Loading