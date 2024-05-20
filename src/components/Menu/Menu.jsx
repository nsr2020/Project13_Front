import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, RadioGroup, useDisclosure } from "@chakra-ui/react"

import { useState } from "react"
import { useNavigate } from "react-router"


const MenuComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("right") 
    const navigate = useNavigate()

    const handleClickMenu =  (platformName) => {
        navigate(`/movies/${platformName}`)
    }

  return (
   <>
   <RadioGroup defaultValue={placement} onChange={setPlacement}>
    </RadioGroup>
    <Image src="/assets/menublue.png" 
    alt="menu" 
    cursor="pointer"
    top="20px"
    right="20px" w="50px" h="50px" 
    transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
    pos="absolute"
    onClick={onOpen}
></Image>
<Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display="flex" alignItems="center" justifyContent="center" bgColor="#f9d81a"
        borderBottomWidth='1px'>PLATFORMS</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody display="flex" flexDirection="column" alignItems="center" bgColor="#ffdb9e"
        justifyContent="center">
          <Image src="/assets/hbologo1.png"  w="150px" h="150px" cursor="pointer" 
          transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
          onClick={()=>{
            handleClickMenu("Hbo Max")
          }}
          />
          <Image src="/assets/primelogo1.png" w="150px" h="150px" cursor="pointer"
          transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
          onClick={()=>{
            handleClickMenu("Prime Video")
          }}
          />
          <Image src="/assets/net.png" w="150px" h="150px" cursor="pointer"
          transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
          onClick={()=>{
            handleClickMenu("Netflix")
          }}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>

</> 
 
  )
}

export default MenuComponent