import {  Button, Flex, Image} from "@chakra-ui/react"
import Forms from "../Forms/Forms"

const GifStartPage = ({IsFormsArea, dispatch, form, isLoadingLogin, isButtonDisabledLogin, isLoadingRegister, isButtonDisabledRegister}) => {
 
  return (
    <>
    {!IsFormsArea ? (
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
        onClick={() => dispatch({ type: 'IS_FORMS_AREA' })}
          >START</Button>
       </Flex>
    ):(  
       <Forms dispatch={dispatch} form={form} isLoadingLogin={isLoadingLogin} isButtonDisabledLogin={isButtonDisabledLogin}
       isLoadingRegister={isLoadingRegister} isButtonDisabledRegister={isButtonDisabledRegister}
       />    
    )}
   
    </>
  )
}

export default GifStartPage