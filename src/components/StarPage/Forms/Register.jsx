import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";


const Register = () => {
    const userName = 'user-input'; 
    const password= 'password-input';
    const name = 'name-input';
    const lastName= "last-name-input";
    const email = 'email-input';
    const image = 'image-input';
  return (
    <Stack mb="10" border='3px solid black' padding='20px' borderRadius='20px' gap="10px" background="linear-gradient(135deg, #391F5B, #12007a)">
    <h2 style={{color:"yellow"}}>REGISTER</h2>
    <FormControl display="flex" flexDir="column" align="center" background="linear-gradient(135deg, #391F5B, #12007a)" color="white">
    <FormLabel  htmlFor={userName}>User: </FormLabel>
    <Input id={userName}  type="text" placeholder='Debe tener mas de 5 letras..' title="Debe tener mas de 5 letras.." isRequired  pattern=".{5,}" />
    <FormLabel htmlFor={password} marginTop="20px">Password: </FormLabel>
    <Input id={password} type="password" placeholder='Debe tener min 5 letras y una mayúscula' pattern="^(?=.*[A-Z]).{5,}$"
    title="Debe contener al menos 5 letras y una mayúscula"
     isRequired />
    <FormLabel htmlFor={name} marginTop="20px">Name: </FormLabel>
    <Input id={name} type="text" placeholder='Escribe tu nombre' isRequired />
    <FormLabel htmlFor={lastName} marginTop="20px">LastName: </FormLabel>
    <Input id={lastName} type="text" placeholder='Escribe tu apellido' isRequired />
    <FormLabel htmlFor={email} marginTop="20px">Email: </FormLabel>
    <Input id={email} type="email" placeholder='Escribe tu email' isRequired />
    <FormLabel htmlFor={image} marginTop="20px">Picture: </FormLabel>
    <Input id={image} type="file" isRequired />
    <Button 

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

export default Register