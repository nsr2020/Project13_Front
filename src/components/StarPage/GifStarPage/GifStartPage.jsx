import {  Button, Flex, Image} from "@chakra-ui/react"
import { useState } from "react"
import FormLoginRegister from "../FormLoginRegister/FormLoginRegister"


const GifStartPage = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(true)
    }
    

  return (
    <>
    {!click ? (
         <Flex w='350px' h='350px' flexDir='column' gap='15px' align='center'>
         <Image src='/assets/cinema.png' alt='starIcon' w='350px' h='350px' borderRadius='md' />
         <Button bgGradient="linear(to-b, var(--nsr-color1), var(--nsr-color2), var(--nsr-color3), var(--nsr-color4), var(--nsr-color5))"
         padding='25px'
        _hover={{
          bgGradient: 'linear(to-b, var(--nsr-color6), var(--nsr-color7), var(--nsr-color8), var(--nsr-color9), var(--nsr-color10))',
          border: '2px solid var(--nsr-color11)',
          color:'yellow'
        }}
        transition="all 0.5s"
        borderRadius="md"
        onClick={handleClick}
          >START</Button>
       </Flex>
    ):(  
       <FormLoginRegister/>    
    )}
   
    </>
  )
}

export default GifStartPage