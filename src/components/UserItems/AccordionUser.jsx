import { DeleteIcon } from "@chakra-ui/icons"
import { Accordion, AccordionIcon, AccordionItem, AccordionPanel, Box, AccordionButton, Flex, Text, Image } from "@chakra-ui/react"
import { handleDeleteMovie } from "../../utils/User/userFunctions"



const AccordionUser = ({user, setUserMovies, toast, userMovies}) => {
  return (
    <>
       <Accordion allowToggle>
                            <AccordionItem bgColor="#d0b08a">
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' textAlign='left' bgColor="#d0b08a" borderBottom="2px solid red"
                                            w="100%" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="black">
                                            LIST OF SEEN MOVIES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel mt="-10px">
                                    {(!userMovies.length) && (
                                        <Flex align="center" justifyContent="center" borderBottom="1px solid red" w="99%">
                                        <Text color="black" fontWeight="bold">You have not added any movie yet</Text>
                                        </Flex>    
                                    )}
                                    {
                                    userMovies?.map((movie, index) => (
                                        <Flex key={index} align="center" justifyContent="space-between"
                                         borderBottom="1px solid red" w="99%"   p={{ base: "10px", md: "20px" }}>
                                            <Image src={movie.image} 
                                             w={{ base: "30px", md: "70px" }}
                                             h={{ base: "45px", md: "90px" }}
                                            borderRadius="20%" mb="10px" mt="10px" />
                                            <Text color="black" fontWeight="bold" fontSize={["8px", "15px", "15px", "15px"]}>{movie.name}</Text>
                                            
                                            
                                      
                                            <DeleteIcon cursor="pointer" transition="all 0.5s" w={{ base: "10px", md: "40px" }}
                                                _hover={{ transform: "scale(1.5)" }}
                                                onClick={() => handleDeleteMovie(movie._id, user, setUserMovies, toast)}
                                            />
                                        </Flex>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
    </>
  )
}

export default AccordionUser