import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, 
    DrawerOverlay, Flex, Image, RadioGroup, 
    Text,
    useToast} from "@chakra-ui/react"
import { handleClickButtonTrailer } from "../../utils/Movie/MovieFunctions";


const MenuVideo = ({placement, setPlacement, navigate, isOpen, onClose, onOpen, id}) => {
  const  user = JSON.parse(localStorage.getItem('userName'))
  const toast = useToast()

    const handleClickMenuVideo = (type) => {
     
        switch (type) {
            case "trailer":
                handleClickButtonTrailer(id,navigate)
                break;
            case "add":
                handleAddMovieToList(id)
                break;
            case "user":
                navigate(`/user/${id}`)
                break;
            default:
                break;
        }   
    }
    const handleAddMovieToList = async (id) => {
      
      if (user.seenMovies.includes(id)) {
        toast({
            title: 'Error',
            description: "Movie already in list",
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
        return;
    }

    user.seenMovies = [...user.seenMovies, id]

        const res = await fetch(`https://project-13-back.vercel.app/api/v1/users/${user._id}`,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "PUT",
          body: JSON.stringify({ 
              seenMovies: [id]
          }),
        });
        const answer = await res.json();
        localStorage.setItem("userName",JSON.stringify(answer))
        
        if(res.status === 400){
          toast({
            title: 'Error',
            description: "Movies could not be added to list",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
        if(res.status === 200){
          toast({
            title: 'Success!',
            description: "Movies has been successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          
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
                handleClickMenuVideo("trailer")
             }}
             />
            </Flex>
           <Flex flexDir="column" align="center">
           <Text fontWeight="bold" userSelect="none">Add to Movie seen List</Text>
             <Image src="/assets/checked.png" w="100px" h="100px" cursor="pointer"
             transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
             onClick={()=>{
                handleClickMenuVideo("add")
             }}
             />
           </Flex>
          <Flex flexDir="column" align="center">
          <Text fontWeight="bold" userSelect="none">User Info</Text>
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