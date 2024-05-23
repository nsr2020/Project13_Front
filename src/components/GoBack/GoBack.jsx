import { Flex, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router"


const GoBack = ({goTo}) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(goTo)
    }
  return (
    <Flex pos="relative">
        <Image src="/assets/goBack.png" w="50px" h="50px" 
        position="fixed" top="20px" left="20px" zIndex="1"
        cursor="pointer"
        transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
        
        onClick={handleGoBack}
        ></Image>
    </Flex>
  )
}

export default GoBack