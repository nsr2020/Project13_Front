import { Flex, Text } from "@chakra-ui/react"


const AllMoviesText = ({platformName}) => {

    const handleClickAllMovies = () => {
        window.location.href = `/movies_Search/${platformName}`
    }
  return (
    <>
    <Flex align="center" justify="center" bgColor="transparent"  >
        <Text color="yellow" fontWeight="bold"fontSize={["20px", "25px", "30px", "34px"]}  
        cursor="pointer"
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

export default AllMoviesText