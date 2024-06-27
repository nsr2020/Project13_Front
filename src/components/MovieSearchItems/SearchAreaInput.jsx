import { Button, Divider, Flex, Input, Select } from "@chakra-ui/react";
import { handleCleanInputMovieSearch, handleInputMovieSearch } from "../../utils/MoviesSearch/movieSearchFuntions";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";



const SearchAreaInput = ({nameMovieRef, dispatch, platformName, toast, selectedGenre, selectGenreRef}) => {
  console.log(selectGenreRef, selectedGenre);

  const handleSelect = (e) => {
    dispatch({
      type: "SELECT_GENRE",
      payload: e.target.value,
    });
  }
  
    return (
        <>
        <Flex w="100%" 
        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))" 
        align="center"
        flexDir="var(--nsr-direction1)" 
        gap={{ base: "var(--nsr-gap1)", md: "var(--nsr-gap2)", lg: "var(--nsr-gap3)" }}  
        pos="var(--nsr-pos4)" 
        top="0" 
        zIndex="1" 
        opacity="0.9" 
         p={{ base: "10px", md: "20px" }}>
        <Flex align="center" justify="center" w="100%">
         <Input  w={{ base: "90%", md: "60%", lg: "50%" }} 
          mt="50px" id='name' ref={nameMovieRef} type='text'
          
         placeholder="Busca por nombre o por letra"
         bg="var(--nsr-color6)"
      color="var(--nsr-color1)"
      _placeholder={{ 
        color: 'var(--nsr-color1)',
        fontSize: { base: "12px", sm: "14px", md: "16px", lg: "18px" } 
      }}
         />
         </Flex>
         <Flex  
         gap={{ base: "5px", md: "var(--nsr-gap3)", lg: "var(--nsr-gap4)" }}
         align="center" justify="center" >
          <Select
      width={{ base: "70px", sm: "150px", md: "150px", lg: "150px" }}
      height={{ base: "35px", sm: "40px", md: "40px", lg: "40px" }}
      fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}
      borderRadius="20px"
      border="5px groove black"
      fontWeight="bold"
      
      bg="gray.100" 
      sx={{
        "option": {
          fontWeight: "bold",
          backgroundColor: "gray.100" // Fondo claro para opciones
        },  
      }}
      value={selectedGenre}
      ref={selectGenreRef}
      onChange={(e) => handleSelect(e)}
    >
            <option  value="All" >All</option>
            <option  value="Action">Action</option>
            <option  value="Comedy">Comedy</option>
            <option  value="Horror">Horror</option>
            <option  value="Kids">Kids</option>
            <option  value="Releases">Releases</option>
          </Select>
         <Button onClick={()=>{
          handleInputMovieSearch(nameMovieRef ,dispatch, platformName, toast,selectGenreRef)
         }}
         _hover={{transform:"scale(0.9)", transition:"var(--nsr-transition)"}}
         width={{ base: "70px", sm: "120px", md: "120px", lg: "120px" }}
      height={{ base: "30px", sm: "40px", md: "40px", lg: "40px" }}
      fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}
         leftIcon={<SearchIcon />}
         
         >Search</Button>
         <Button onClick={()=>{
          handleCleanInputMovieSearch(nameMovieRef, dispatch, platformName,selectGenreRef);
         }}
         _hover={{transform:"scale(0.9)", transition:"var(--nsr-transition)"}}
         width={{ base: "70px", sm: "120px", md: "120px", lg: "120px" }}
         height={{ base: "30px", sm: "40px", md: "40px", lg: "40px" }}
         fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}
         leftIcon={<DeleteIcon />}
         >CleanFilter</Button>  
         </Flex>
         <Divider w="100%" />
         </Flex>
        </>
      );
}

export default SearchAreaInput