import { Flex, Text } from "@chakra-ui/react"


const AllMoviesText = ({platformName}) => {

    const handleClickAllMovies = () => {
        window.location.href = `/movies_Search/${platformName}`
    }
  return (
    <>
    <Flex align="center" justify="center" bgColor="transparent"  >
        <Text color="var(--nsr-color2)" fontWeight="var(--nsr-fweight1)"
        fontSize={["20px", "25px", "30px", "34px"]}  
        cursor="var(--nsr-cursor1)"
        _hover={{transform:"scale(0.8)",
                 transition:"var(--nsr-transition)" }}
        onClick={()=>{
            handleClickAllMovies()
        }}
        >SEE ALL MOVIES</Text>
    </Flex>
    </>
  )
}

export default AllMoviesText