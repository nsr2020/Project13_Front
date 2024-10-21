import {  Button, Flex, Image} from "@chakra-ui/react"
import Forms from "../Forms/Forms"
import { useStartPage } from "../../../services/useStartPage"

const GifStartPage = () => {
  const {isFormsArea,dispatch,handleDemo} = useStartPage()
  return (
    <>
    {!isFormsArea ? (
         <Flex w={{base: "250px", md: "250px", lg: "350px", xl: "350px"}} h='350px' flexDir='var(--nsr-direction1)' 
         gap='15px' align='center'>
         <Image src='/assets/cinema.png' alt='starIcon' 
         w={{base: "250px", md: "250px", lg: "350px", xl: "350px"}}
         h={{base: "250px", md: "250px", lg: "350px", xl: "350px"}}
         borderRadius='md'/>
         <Flex w={{base: "250px", md: "250px", lg: "350px", xl: "350px"}} alignItems='center' justifyContent='center' gap='30px'>
         <Button 
         bgGradient="linear-gradient(116.49deg, #7000ff, #e700b7 47.4%, #ffa000)"
         padding={{base:'var(--nsr-padding2)', md:'var(--nsr-padding3)',lg:'var(--nsr-padding3)', xl:'var(--nsr-padding3)'}}
         color='var(--nsr-color18)'
         fontSize={{base:'var(--nsr-font-size2)'}}
         outline=" 3px solid var(--nsr-color3)"
        _hover={{
          transform:"scale(0.8)"
        }}
        transition="var(--nsr-transition)"
        borderRadius="md"
        onClick={() => dispatch({ type: 'IS_FORMS_AREA' })}
          >Login</Button>
           <Button bgGradient="linear-gradient(116.49deg, #7000ff, #e700b7 47.4%, #ffa000)"
         padding={{base:'var(--nsr-padding2)', md:'var(--nsr-padding3)',lg:'var(--nsr-padding3)', xl:'var(--nsr-padding3)'}}
         color='var(--nsr-color18)'
         fontSize="var(--nsr-font-size2)"
         outline=" 3px solid var(--nsr-color3)"
        _hover={{
          transform:"scale(0.8)"
        }}
        transition="var(--nsr-transition)"
        borderRadius="md"
        onClick={(handleDemo)}
          >Demo</Button>
          </Flex>
       </Flex>
    ):(  
       <Forms 
       />    
    )}
   
    </>
  )
}

export default GifStartPage