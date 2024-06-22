import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, RadioGroup, useDisclosure } from "@chakra-ui/react"
import { Rate } from "antd"
import { useState } from "react"
import { customStyle } from "../../utils/MoviesSearch/movieSearchFuntions"

const SearchMovieImage = ({movie}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("left") 
  return (
    <>
    <RadioGroup defaultValue={placement} onChange={setPlacement}>
     </RadioGroup>
   <Image
              src={movie.image}
              alt={movie.name}
              w={{ base: "100%", sm: "100%", md: "100%" }}
              h={{ base: "70%", sm: "70%", md: "70%" }}
              borderRadius="md"
              boxShadow="md"
              transition="var(--nsr-transition)"
              cursor="var(--nsr-cursor1)"
              _hover={{transform:"scale(0.7) rotate(30deg)"}}
              onClick={onOpen}
            />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="full" >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerHeader 
         display="flex" alignItems="center" 
         fontSize={["14px", "16px", "19px", "20px"]}
         justifyContent="center" bgColor="var(--nsr-color16)" p="var(--nsr-padding3)" 
         bgImage="var(--nsr-bimage2)"
         borderBottomWidth='2px' color="var(--nsr-color1)" 
         overflow="hidden"
         whiteSpace="nowrap"
         textOverflow="ellipsis"
         >{movie.name}</DrawerHeader>
         <DrawerCloseButton  color="var(--nsr-color1)" border="3px solid white" />
         <DrawerBody display="flex"
        flexDirection="var(--nsr-direction1)" 
         alignItems="center" bgColor="#a68059"
         bgImage="var(--nsr-bimage2)"
         justifyContent="center">
           <Image src={movie.image} 
            w={{ base: "80%", sm: "80%", md: "500px" }}
            minWidth={{ base: "200px", sm: "250px", md: "280px" }}
            h={{base:"60svh", sm:"70svh", md:"75svh"}}
            borderRadius="var(--nsr-bradius2)" mb="var(--nsr-margin2)"
           />
              <Rate
        disabled
        defaultValue={movie.stars}
        style={customStyle}
        character={({ index }) => (
          <span style={index + 1 <= movie.stars ? { color: 'var(--nsr-color17)' } : { color: 'var(--nsr-color18)' }}>★</span>
        )}
      />
         </DrawerBody>
       </DrawerContent>
     </Drawer>
    </>
  )
}

export default SearchMovieImage