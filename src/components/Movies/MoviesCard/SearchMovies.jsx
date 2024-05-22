import { Flex, Text } from "@chakra-ui/react"


const SearchMovies = ({platformName}) => {

    const handleClickAllMovies = () => {
        window.location.href = `/movies_Search/${platformName}`
    }
  return (
    <>
    <Flex align="center" justify="center" bgColor="transparent"  >
        <Text color="blue" fontWeight="bold" fontSize="25px" cursor="pointer"
        _hover={{transform:"scale(0.8)",
                 transition:"all 0.5s" }}
        onClick={()=>{
            handleClickAllMovies()
        }}
        >SEE ALL MOVIES</Text>
    </Flex>
    </>
  )
}

export default SearchMovies