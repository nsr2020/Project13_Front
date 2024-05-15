import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

const Login = () => {
    const userId = 'user-input'; 
    const passwordId = 'password-input';
  return (
    <Stack border='3px solid black' padding='20px' borderRadius='20px' gap="10px" background="linear-gradient(135deg, #391F5B, #12007a)">
    <h2 style={{color:"yellow"}}>LOGIN</h2>
    <FormControl display="flex" flexDir="column" align="center" background="linear-gradient(135deg, #391F5B, #12007a)" color="white">
    <FormLabel  htmlFor={userId}>User: </FormLabel>
    <Input id={userId}  type="text" placeholder='Escribe tu usuario...' isRequired title="Debe tener mas de 5 letras.." pattern=".{5,}"  />
    <FormLabel htmlFor={passwordId} marginTop="20px">Password: </FormLabel>
    <Input id={passwordId} type="password" placeholder='Escribe tu contraseña...' 
    pattern="^(?=.*[A-Z]).{5,}$"
    title="Debe contener al menos 5 letras y una mayúscula"
    isRequired />
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
  )
}

export default Login