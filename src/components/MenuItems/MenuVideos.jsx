import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  RadioGroup,
} from '@chakra-ui/react';
import { handleClickMenuVideos } from '../../utils/Menu/menuFunctions';
import { useMenu } from '../../services/useMenu';

const MenuVideos = ({
  place,
  nameMovieRef,
  moviesSearch,
  moviesAction,
  selectGenreRef,
}) => {
  const { isOpen, onOpen, onClose, dispatch, toast, navigate, placement } =
    useMenu();
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={placement}></RadioGroup>
      <Image
        src="/assets/menu4.png"
        alt="menu"
        cursor="var(--nsr-cursor1)"
        w={{ base: '30px', md: '50px', lg: '50px', xl: '50px' }}
        h={{ base: '30px', md: '50px', lg: '50px', xl: '50px' }}
        pos="var(--nsr-pos3)"
        transition="var(--nsr-transition)"
        _hover={{ transform: 'scale(0.8)' }}
        top="20px"
        right="20px"
        zIndex="1"
        onClick={onOpen}
      ></Image>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="var(--nsr-color3)"
            borderBottomWidth="1px"
            userSelect="var(--nsr-userSelect)"
          >
            PLATFORMS
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            flexDirection="var(--nsr-direction1)"
            alignItems="center"
            bgColor="var(--nsr-color4)"
            justifyContent="center"
          >
            <Image
              src="/assets/hbologo1.png"
              w="150px"
              h="150px"
              cursor="var(--nsr-cursor1)"
              transition="var(--nsr-transition)"
              _hover={{ transform: 'scale(0.8)' }}
              onClick={() => {
                handleClickMenuVideos(
                  'Hbo Max',
                  place,
                  moviesAction,
                  toast,
                  navigate,
                  moviesSearch,
                  nameMovieRef,
                  selectGenreRef,
                  dispatch,
                  onClose,
				  
                );
              }}
            />
            <Image
              src="/assets/primelogo1.png"
              w="150px"
              h="150px"
              cursor="var(--nsr-cursor1)"
              transition="var(--nsr-transition)"
              _hover={{ transform: 'scale(0.8)' }}
              onClick={() => {
                handleClickMenuVideos(
                  'Prime Video',
                  place,
                  moviesAction,
                  toast,
                  navigate,
                  moviesSearch,
                  nameMovieRef,
                  selectGenreRef,
                  dispatch,
                  onClose,
                );
              }}
            />
            <Image
              src="/assets/net.png"
              w="150px"
              h="150px"
              cursor="var(--nsr-cursor1)"
              transition="var(--nsr-transition)"
              _hover={{ transform: 'scale(0.8)' }}
              onClick={() => {
                handleClickMenuVideos(
                  'Netflix',
                  place,
                  moviesAction,
                  toast,
                  navigate,
                  moviesSearch,
                  nameMovieRef,
                  selectGenreRef,
                  dispatch,
                  onClose,
				
                );
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuVideos;
