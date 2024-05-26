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
       cursor="var(--nsr-cursor1)"
       top="20px"
       right="20px"
       w={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
       h={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
       transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
       pos="var(--nsr-pos3)"
       zIndex="1"
       onClick={onOpen}
   ></Image>
   <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
         <DrawerOverlay />
         <DrawerContent>
           <DrawerHeader display="flex" alignItems="center" justifyContent="center" bgColor="var(--nsr-color3)"
           borderBottomWidth='1px'userSelect="var(--nsr-userSelect)">VIDEO OPTIONS</DrawerHeader>
           <DrawerCloseButton />
           <DrawerBody display="flex" flexDirection="var(--nsr-direction1)" alignItems="center" bgColor="var(--nsr-color4)"
           justifyContent="space-around">
            <Flex flexDir="var(--nsr-direction1)" align="center">
            <Text fontWeight="bold" userSelect="var(--nsr-userSelect)">Trailer</Text>
             <Image src="/assets/trailer.png"  w="100px" h="100px" cursor="var(--nsr-cursor1)" 
             transition="var(--nsr-transition)" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("trailer", id, navigate)
             }}
             />
            </Flex>
           <Flex flexDir="var(--nsr-direction1)" align="center">
           <Text fontWeight="var(--nsr-fweight1)" userSelect="var(--nsr-userSelect)">Add to Movie seen List</Text>
             <Image src="/assets/checked.png" w="100px" h="100px" cursor="var(--nsr-cursor1)"
             transition="var(--nsr-transition)" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("add", id, navigate, user, toast)
             }}
             />
           </Flex>
          <Flex flexDir="var(--nsr-direction1)" align="center">
          <Text fontWeight="var(--nsr-fweight1)" userSelect="var( --nsr-userSelect)">User Info</Text>
             <Image src="/assets/usericon.png" w="100px" h="100px" cursor="var(--nsr-cursor)"
             transition="var(--nsr-transition)" _hover={{ transform: "scale(0.8)"}}
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