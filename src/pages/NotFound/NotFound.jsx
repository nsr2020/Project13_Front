import {  Flex, Text, Image } from '@chakra-ui/react';
import BgGradient from '../../components/StarPage/BgStartPage/BgGradient';

const NotFoundPage = () => (
  <BgGradient>
    <Flex direction='var(--nsr-direction1)' align='center' justify='center'>
      <Text
        fontSize={{ base: 'var(--nsr-font-size3)', md: 'var(--nsr-font-size4)',
            lg: "var(--nsr-font-size5)", xl: "var(--nsr-font-size5)"  }}
        color='var(--nsr-color2)'
        marginBottom={{ base: 'var(--nsr-border2)', md: 'var(--nsr-border4)' }}
        textShadow='1px 1px 2px var(--nsr-color6)'
      >
        Page Not Found
      </Text>
      <Image
        src='/assets/gafasNotFound.png'
        width={{ base: '150px', md: '250px', lg:'300px', xl:'300px' }}
      />
    </Flex>
  </BgGradient>
);

export default NotFoundPage;
