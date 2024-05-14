import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const FormLoginRegister = () => {
    const userId = 'user-input'; 
    const passwordId = 'password-input';
  return (
    <Flex justify="center" align="center" flexDir="column" gap="10">
    <Flex justify="center" align="center" flexDir="row" gap="10">
    <Button
    colorScheme='teal'
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
    >Login</Button>
    <Button 
    colorScheme='teal'
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
    >Register</Button>
    </Flex>
<Stack border='3px solid black' padding='20px' borderRadius='20px' gap="10px" background="linear-gradient(135deg, #391F5B, #12007a)">
    <h2 style={{color:"yellow"}}>LOGIN</h2>
    <FormControl display="flex" flexDir="column" align="center" background="linear-gradient(135deg, #391F5B, #12007a)" color="white">
    <FormLabel  htmlFor={userId}>User: </FormLabel>
    <Input id={userId}  type="text" placeholder='Escribe tu usuario...' isRequired />
    <FormLabel htmlFor={passwordId} marginTop="20px">Password: </FormLabel>
    <Input id={passwordId} type="password" placeholder='Escribe tu contraseña...' isRequired />
    <Button 
    isDisabled
    bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" 
    marginTop="20px" 
    color="white"
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
    >SEND</Button>
    </FormControl>
</Stack>
</Flex>
  )
}

export default FormLoginRegister