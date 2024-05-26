import { Button, Divider, Flex, Input } from "@chakra-ui/react";
import { handleCleanInputMovieSearch, handleInputMovieSearch } from "../../utils/MoviesSearch/movieSearchFuntions";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";


const SearchAreaInput = ({nameMovieRef, setMoviesSearch, platformName, toast}) => {
    return (
        <>
        <Flex w="100%" bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" align="center"flexDir="column" 
        gap="20px" pos="sticky" top="0" zIndex="1" opacity="0.9"  p={{ base: "20px", md: "30px" }}>
        <Flex align="center" justify="center" w="100%">
         <Input  w={{ base: "90%", md: "60%", lg: "50%" }}  mt="40px" id='name' ref={nameMovieRef} type='text'
         placeholder="Busca por nombre o por letra"
         bg="black"
      color="white"
      _placeholder={{ color: 'white' }}
         />
         </Flex>
         <Flex  gap={{ base: "20px", md: "30px", lg: "40px" }}
         align="center" justify="center" >
         <Button onClick={()=>{
          handleInputMovieSearch(nameMovieRef ,setMoviesSearch, platformName, toast)
         }}
         _hover={{transform:"scale(1.2)", transition:"all 0.5s"}}
         size={{ base: "sm", md: "md", lg: "lg" }}
         leftIcon={<SearchIcon />}
         
         >Search</Button>
         <Button onClick={()=>{
          handleCleanInputMovieSearch(nameMovieRef, setMoviesSearch, platformName);
         }}
         _hover={{transform:"scale(1.2)", transition:"all 0.5s"}}
         size={{ base: "sm", md: "md", lg: "lg" }}
         leftIcon={<DeleteIcon />}
         >CleanFilter</Button>  
         </Flex>
         <Divider w="100%" />
         </Flex>
        </>
      );
}

export default SearchAreaInput