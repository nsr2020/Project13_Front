import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, RadioGroup, useToast } from "@chakra-ui/react"
import { handleClickMenuVideos } from "../../utils/Menu/menuFunctions"

const MenuVideos = ({placement, setPlacement, navigate, isOpen, onClose, onOpen, place, nameMovieRef, moviesSearch , moviesAction}) => {
  const toast = useToast()

  return (
    <>
    <RadioGroup defaultValue={placement} onChange={setPlacement}>
     </RadioGroup>
     <Image src="/assets/menu4.png" 
     alt="menu" 
     cursor="pointer"
     top="20px"
     right="20px" 
     w={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
     h={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
     transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
     pos="fixed"
     zIndex="1"
     onClick={onOpen}
 ></Image>
 <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerHeader display="flex" alignItems="center" justifyContent="center" bgColor="#f9d81a"
         borderBottomWidth='1px' userSelect="none">PLATFORMS</DrawerHeader>
         <DrawerCloseButton />
         <DrawerBody display="flex" flexDirection="column" alignItems="center" bgColor="#ffdb9e"
         justifyContent="center">
           <Image src="/assets/hbologo1.png"  w="150px" h="150px" cursor="pointer" 
           transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
           onClick={()=>{
            handleClickMenuVideos("Hbo Max",place, moviesAction,toast,navigate, moviesSearch, nameMovieRef)
           }}
           />
           <Image src="/assets/primelogo1.png" w="150px" h="150px" cursor="pointer"
           transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
           onClick={()=>{
            handleClickMenuVideos("Prime Video", place, moviesAction,toast,navigate, moviesSearch, nameMovieRef)
           }}
           />
           <Image src="/assets/net.png" w="150px" h="150px" cursor="pointer"
           transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
           onClick={()=>{
            handleClickMenuVideos("Netflix", place, moviesAction,toast,navigate, moviesSearch, nameMovieRef)
           }}
           />
         </DrawerBody>
       </DrawerContent>
     </Drawer>
     </>
  )
}

export default MenuVideos