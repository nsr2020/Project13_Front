import { Avatar, Box, CardHeader, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react'
import { handleLogOutClick } from '../../utils/User/userFunctions'
import LogOut from '../LogOut/LogOut'

const CardHeaderUser = ({user, navigate, toast}) => {
  return (
    <>
    <CardHeader >
                            <Flex direction={{ base: "var(--nsr-direction1)", md: "row" }} 
                            align="center" spacing="4">
                                <Flex flex="1" alignItems='center' flexWrap='wrap'  
                                gap={{ base: "20px", md: "40px", lg: "80px" }}>
                                    <Avatar name={user?.name} src={user?.image}
                                        w={{ base: "60px", md: "80px", lg: "100px" }}
                                        h={{ base: "60px", md: "80px", lg: "100px" }}
                                    />
                                    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center"mt="10px">
                                        <Heading size={{ base: "md", md: "lg", lg: "xl" }} mb="15px"
                                        >{user?.name} {user?.lastName}</Heading>
                                        <Text color="var(--nsr-color6)" 
                                        fontSize={{ base: "12px", md: "md", lg: "lg" }}
                                        fontWeight="var(--nsr-fweight1)" 
                                        textAlign="center"> User Info, keep in mind that you can modify your details at any time, please send us an email.</Text>
                                    </Box>
                                  {/*   <Image pos="var(--nsr-pos2)"
                                     top={{ base: "10px", md: "20px" }}
                                     right={{ base: "10px", md: "20px" }}
                                     cursor="var(--nsr-cursor1)"
                                    src="/assets/logOut.png"w={{ base: "30px", md: "40px", lg: "50px" }} title="LogOut"
                                    transition="var(--nsr-transition)"
                                    _hover={{transform:"scale(1.1)"}}
                                    onClick={()=>handleLogOutClick(navigate, toast)}
                                    /> */}
                                </Flex>
                            </Flex>
                            <LogOut posDir="right"/>
                        </CardHeader></>
  )
}

export default CardHeaderUser