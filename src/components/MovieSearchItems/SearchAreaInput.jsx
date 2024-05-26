import { Button, Divider, Flex, Input } from "@chakra-ui/react";
import { handleCleanInputMovieSearch, handleInputMovieSearch } from "../../utils/MoviesSearch/movieSearchFuntions";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";


const SearchAreaInput = ({nameMovieRef, setMoviesSearch, platformName, toast}) => {
    return (
        <>
        <Flex w="100%" 
        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))" 
        align="center"
        flexDir="var(--nsr-direction1)" 
        gap="var(--nsr-gap2)" 
        pos="var(--nsr-pos4)" 
        top="0" 
        zIndex="1" 
        opacity="0.9" 
         p={{ base: "20px", md: "30px" }}>
        <Flex align="center" justify="center" w="100%">
         <Input  w={{ base: "90%", md: "60%", lg: "50%" }}  mt="40px" id='name' ref={nameMovieRef} type='text'
         placeholder="Busca por nombre o por letra"
         bg="var(--nsr-color6)"
      color="var(--nsr-color1)"
      _placeholder={{ color: 'var(--nsr-color1)' }}
         />
         </Flex>
         <Flex  
         gap={{ base: "var(--nsr-gap2)", md: "var(--nsr-gap3)", lg: "var(--nsr-gap4)" }}
         align="center" justify="center" >
         <Button onClick={()=>{
          handleInputMovieSearch(nameMovieRef ,setMoviesSearch, platformName, toast)
         }}
         _hover={{transform:"scale(1.2)", transition:"var(--nsr-transition)"}}
         size={{ base: "sm", md: "md", lg: "lg" }}
         leftIcon={<SearchIcon />}
         
         >Search</Button>
         <Button onClick={()=>{
          handleCleanInputMovieSearch(nameMovieRef, setMoviesSearch, platformName);
         }}
         _hover={{transform:"scale(1.2)", transition:"var(--nsr-transition)"}}
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