import { Flex, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router"


const GoBack = ({goto}) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(`/${goto}`)
    }
  return (
    <Flex>
        <Image src="/assets/goBack.png" w="50px" h="50px" 
        position="absolute" top="20px" left="20px"
        cursor="pointer"
        transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
        onClick={handleGoBack}
        ></Image>
    </Flex>
  )
}

export default GoBack