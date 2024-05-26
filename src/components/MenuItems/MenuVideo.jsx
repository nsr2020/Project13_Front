import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, 
    DrawerOverlay, Flex, Image, RadioGroup, 
    Text,
    useToast} from "@chakra-ui/react"
import { handleClickMenuVideo } from "../../utils/Menu/menuFunctions";


const MenuVideo = ({placement, setPlacement, navigate, isOpen, onClose, onOpen, id}) => {
  const  user = JSON.parse(localStorage.getItem('userName'))
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
           borderBottomWidth='1px'userSelect="none">VIDEO OPTIONS</DrawerHeader>
           <DrawerCloseButton />
           <DrawerBody display="flex" flexDirection="column" alignItems="center" bgColor="#ffdb9e"
           justifyContent="space-around">
            <Flex flexDir="column" align="center">
            <Text fontWeight="bold" userSelect="none">Trailer</Text>
             <Image src="/assets/trailer.png"  w="100px" h="100px" cursor="pointer" 
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("trailer", id, navigate)
             }}
             />
            </Flex>
           <Flex flexDir="column" align="center">
           <Text fontWeight="bold" userSelect="none">Add to Movie seen List</Text>
             <Image src="/assets/checked.png" w="100px" h="100px" cursor="pointer"
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("add", id, navigate, user, toast)
             }}
             />
           </Flex>
          <Flex flexDir="column" align="center">
          <Text fontWeight="bold" userSelect="none">User Info</Text>
             <Image src="/assets/usericon.png" w="100px" h="100px" cursor="pointer"
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("user", id, navigate)
             }}
             />
          </Flex>
            
           </DrawerBody>
         </DrawerContent>
       </Drawer>
    </>
  )
}

export default MenuVideo