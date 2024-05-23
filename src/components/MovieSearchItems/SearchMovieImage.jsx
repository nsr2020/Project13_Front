import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, RadioGroup, useDisclosure } from "@chakra-ui/react"
import { Rate } from "antd"
import { useState } from "react"

const SearchMovieImage = ({movie}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("left") 
    const customStyle = {
      fontSize: '22px',
      backgroundColor: 'transparent',
    };
  return (
    <>
    <RadioGroup defaultValue={placement} onChange={setPlacement}>
     </RadioGroup>
   <Image
              src={movie.image}
              alt={movie.name}
              w="70%"
              h="70%"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.5s"
              cursor="pointer"
              _hover={{transform:"scale(0.8) rotate(30deg)"}}
              onClick={onOpen}
            />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="full" >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerHeader display="flex" alignItems="center" justifyContent="center" bgColor="#6c3e1e"
         bgImage="url(https://www.transparenttextures.com/patterns/brick-wall-dark.png)"
         borderBottomWidth='2px' color="white">{movie.name}</DrawerHeader>
         <DrawerCloseButton mt="10px" color="white" border="3px solid white"/>
         <DrawerBody display="flex" flexDirection="column" alignItems="center" bgColor="#a68059"
         bgImage="url(https://www.transparenttextures.com/patterns/brick-wall-dark.png)"
         justifyContent="center">
           <Image src={movie.image}  w="500px" minWidth="280px" h="75svh" borderRadius="20px" mb="20px"
           />
              <Rate
        disabled
        defaultValue={movie.stars}
        style={customStyle}
        character={({ index }) => (
          <span style={index + 1 <= movie.stars ? { color: '#faad14' } : { color: '#d1d1d1' }}>★</span>
        )}
      />
         </DrawerBody>
       </DrawerContent>
     </Drawer>
    </>
  )
}

export default SearchMovieImage