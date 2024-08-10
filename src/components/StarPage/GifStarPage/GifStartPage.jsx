import {  Button, Flex, Image} from "@chakra-ui/react"
import Forms from "../Forms/Forms"
import { useStartPage } from "../../../services/useStartPage"

const GifStartPage = () => {
  const {IsFormsArea,dispatch,
    isLoadingLogin,
    isButtonDisabledLogin,
    isLoadingRegister,
    isButtonDisabledRegister} = useStartPage()
  return (
    <>
    {!IsFormsArea ? (
         <Flex w='350px' h='350px' flexDir='var(--nsr-direction1)' 
         gap='15px' align='center'>
         <Image src='/assets/cinema.png' alt='starIcon' w='350px' h='350px' 
         borderRadius='md' />
         <Button bgGradient="linear-gradient(116.49deg, #7000ff, #e700b7 47.4%, #ffa000)"
         padding='var(--nsr-padding3)'
         color='var(--nsr-color18)'
         fontSize="var(--nsr-font-size2)"
         outline=" 3px solid var(--nsr-color3)"
        _hover={{
          transform:"scale(0.8)"
        }}
        transition="var(--nsr-transition)"
        borderRadius="md"
        onClick={() => dispatch({ type: 'IS_FORMS_AREA' })}
          >START</Button>
       </Flex>
    ):(  
       <Forms 
       />    
    )}
   
    </>
  )
}

export default GifStartPage