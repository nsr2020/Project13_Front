import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Image, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { handleClickIconInfoMovie } from "../../utils/MoviesFunctions/movies"
import { handleClickDeleteImage } from "../../utils/MoviesAdminFunctions/moviesAdminFunctions"
import React from "react"


/* handleClickDeleteImage(movie._id,dispatch,toast, movie.platform,navigate) */

const SearchMoviesCardItems = ({movie, navigate, place, rol}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
 const toast = useToast()
 const id = movie?._id
 const platformName = movie?.platform

 const handleDelete =  () => {
  try { 
       handleClickDeleteImage(movie._id, toast, platformName); 
       setTimeout(()=>{
        onClose()
       },200)
       
    
    
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
};
  return (
    <>
     <Text color="var(--nsr-color1)" mt="var(--nsr-margin1)" textAlign="center" 
     fontSize={{ base: "11px", sm: "14px", md: "15px" }} userSelect="var(--nsr-userSelect)"
     overflow="hidden"
     whiteSpace="nowrap"
     textOverflow="ellipsis"
     
     >
              {movie.name}
            </Text>
            { rol !== "admin" ? <Image src='/assets/info3.png'
              w={{ base: "20px", sm: "25px", md: "30px" }}
              h={{ base: "20px", sm: "25px", md: "30px" }}
              pos="var(--nsr-pos2)" cursor="var(--nsr-cursor1)" 
            bottom="5px" left="45%"
            transition="var(--nsr-transition)"
            _hover={{transform:"scale(1.2)"}}
            onClick={()=>{
              handleClickIconInfoMovie(movie._id, navigate, place)
            }}
            />
            :
            <>
            <Image src='/assets/actualizar1.png'
              w={{ base: "20px", sm: "25px", md: "30px" }}
              h={{ base: "20px", sm: "25px", md: "30px" }}
              pos="var(--nsr-pos2)" cursor="var(--nsr-cursor1)" 
            bottom="5px"
            left="15%"
            transition="var(--nsr-transition)"
            _hover={{transform:"scale(1.2)"}}
            onClick={()=>{
              navigate(`/formPut/${id}/${platformName}`)
            }}
            />
            <Image src='/assets/borrar1.png'
              w={{ base: "20px", sm: "25px", md: "30px" }}
              h={{ base: "20px", sm: "25px", md: "30px" }}
              pos="var(--nsr-pos2)" cursor="var(--nsr-cursor1)" 
            bottom="5px"
            right="15%"
            transition="var(--nsr-transition)"
            _hover={{transform:"scale(1.2)"}}
            onClick={onOpen}
            />
            <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay >
          <AlertDialogContent mt='200px'
          background="linear-gradient(to right, red, green)" w={{base:'275px', sm:'475px'}}>
            <AlertDialogHeader fontSize={{base:'s', sm:'lg'}} fontWeight='bold' color='white'>
              Delete: ** {movie.name} **
            </AlertDialogHeader>

            <AlertDialogBody color='yellow' fontSize={{base:'13px', sm:'16px'}}>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter margin='auto'>
              <Button ref={cancelRef} onClick={onClose} colorScheme='purple'>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
            </>
            }
    </>
  )
}

export default SearchMoviesCardItems
