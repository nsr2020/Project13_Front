import { Flex, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router"


const GoBack = ({goTo}) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(goTo)
    }
  return (
    <Flex pos="relative">
        <Image src="/assets/goBack.png"
         w={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
         h={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
        position="fixed" top="15px" left="15px" zIndex="1"
        cursor="pointer"
        transition="all 0.5s" _hover={{ transform: "scale(0.8)"}}
        
        onClick={handleGoBack}
        ></Image>
    </Flex>
  )
}

export default GoBack