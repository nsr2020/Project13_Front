import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, 
    DrawerOverlay, Flex, Image, RadioGroup, 
    Text} from "@chakra-ui/react"
import { handleClickButtonTrailer } from "../../utils/Movie/MovieFunctions";

const MenuVideo = ({placement, setPlacement, navigate, isOpen, onClose, onOpen, id}) => {
    
    const handleClickMenuVideo = (type) => {
        switch (type) {
            case "trailer":
                handleClickButtonTrailer(id,navigate)
                break;
            case "add":
                handleClickMenuVideo("add")
                break;
            case "user":
                navigate("/user")
                break;
            default:
                break;
        }
        
    }

  return (
    <>
     <RadioGroup defaultValue={placement} onChange={setPlacement}>
       </RadioGroup>
       <Image src="/assets/menu4.png" 
       alt="menu" 
       cursor="pointer"
       top="20px"
       right="20px" w="50px" h="50px" 
       transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
       pos="fixed"
       onClick={onOpen}
   ></Image>
   <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
         <DrawerOverlay />
         <DrawerContent>
           <DrawerHeader display="flex" alignItems="center" justifyContent="center" bgColor="#f9d81a"
           borderBottomWidth='1px'>VIDEO OPTIONS</DrawerHeader>
           <DrawerCloseButton />
           <DrawerBody display="flex" flexDirection="column" alignItems="center" bgColor="#ffdb9e"
           justifyContent="space-around">
            <Flex flexDir="column" align="center">
            <Text fontWeight="bold">Trailer</Text>
             <Image src="/assets/trailer.png"  w="100px" h="100px" cursor="pointer" 
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("trailer")
             }}
             />
            </Flex>
           <Flex flexDir="column" align="center">
           <Text fontWeight="bold">Add to Movie seen List</Text>
             <Image src="/assets/checked.png" w="100px" h="100px" cursor="pointer"
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("add")
             }}
             />
           </Flex>
          <Flex flexDir="column" align="center">
          <Text fontWeight="bold">User Info</Text>
             <Image src="/assets/usericon.png" w="100px" h="100px" cursor="pointer"
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("user")
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