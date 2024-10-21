import { Box, Flex } from '@chakra-ui/react';
import ImagesPlatform from '../../components/PlatformsItems/ImagesPlatform';
import Loading from '../../components/Loading/Loading';
import { usePlatforms } from '../../services/usePlatforms';
import TitlePlatform from '../../components/PlatformsItems/TitlePlatform';
import GoBack from '../../components/GoBack/GoBack';


const Platforms = () => {
  const { platforms, navigate, demo } = usePlatforms() 

  return (
    <>
      {!platforms.length && <Loading />}
      {platforms?.length && (
        <Flex
          direction="var(--nsr-direction1)"
          align="center"
          justify="center"
          w="100%"
          h="100svh"
          gap="120px"
          transition="var(--nsr-transition)"
          bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
        >
          <TitlePlatform />
          <Box
            display="flex"
            gap={{ base: '20px', md: '40px', lg: '60px', xl: '80px' }}
            transition="var(--nsr-transition)"
          >
            <ImagesPlatform navigate={navigate} platforms={platforms} />
          </Box>
          {demo && <GoBack goTo={`/`}/>}
        </Flex>
      )}
    </>
  );
};

export default Platforms;
