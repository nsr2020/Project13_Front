import { Button, FormControl, FormLabel, Input, Stack, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { handleSubmitLogin } from "../../../reducer/movies.action";



const Register = () => {

  const toast = useToast();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const [isButtonDisabledRegister, setIsButtonDisabledRegister] = useState(true);

  const handleSubmitRegister = async () => {
    try {
      const userName = userNameRef.current.value;
      const password = passwordRef.current.value;
      const name = nameRef.current.value;
      const lastName = lastNameRef.current.value;
      const email = emailRef.current.value;
      const image = imageRef.current.files[0] || "/assets/fotoperfil.jpg";

      const formData = new FormData();
      formData.set('userName', userName);
      formData.set('password', password);
      formData.set('name', name);
      formData.set('lastName', lastName);
      formData.set('email', email);
      formData.set('image', image);
          
    /*   const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userName, password, name, lastName, email, image })
      }; */
      const requestOptions = {
        method: 'POST',
        body: formData,
    };

      const response = await fetch('https://project-13-back.vercel.app/api/v1/users/register', requestOptions);
      console.log(response);

      if (response.status === 201) {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 1500,
            isClosable: true,
          })
          handleSubmitLogin(userName, password, toast, navigate)
      } else {
          
          toast({
              title: "Error",
              description: "Account has not been created successfully",
              status: "error",
              duration: 3000,
              isClosable: true,
          });
      }
  } catch (error) {
      console.error('Error:', error);
  }
  }
   
  const handleInputChangeRegister = () => {
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;

    const isValidPassword = /^(?=.*[A-Z]).{5,}$/.test(password);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setIsButtonDisabledRegister(
        !(userName.length >= 5 && isValidPassword && name.length > 0 && lastName.length > 0 && isValidEmail)
    );
};

  return (
    <Stack mb="10" outline='3px solid black' padding='20px' borderRadius='20px' gap="10px" background="linear-gradient(135deg, #391F5B, #12007a)">
    <h2 style={{color:"yellow"}}>REGISTER</h2>
    <FormControl display="flex" flexDir="column" align="center" background="linear-gradient(135deg, #391F5B, #12007a)" color="white">
    <FormLabel  htmlFor="userNameRef">User: </FormLabel>
    <Input id="userNameRef"  type="text" placeholder='Debe tener mas de 5 letras..' 
    title="Debe tener mas de 5 letras.." isRequired  pattern=".{5,}" onChange={handleInputChangeRegister} ref={userNameRef}/>
    <FormLabel htmlFor="passwordRef" marginTop="20px" >Password: </FormLabel>
    <Input id="passwordRef" type="password" placeholder='Debe tener min 5 letras y una mayúscula' pattern="^(?=.*[A-Z]).{5,}$"
    title="Debe contener al menos 5 letras y una mayúscula"
     isRequired onChange={handleInputChangeRegister} ref={passwordRef}/>
    <FormLabel htmlFor="nameRef" marginTop="20px">Name: </FormLabel>
    <Input id="nameRef" type="text" placeholder='Escribe tu nombre' isRequired onChange={handleInputChangeRegister} ref={nameRef}/>
    <FormLabel htmlFor="lastNameRef" marginTop="20px">LastName: </FormLabel>
    <Input id="lastNameRef" type="text" placeholder='Escribe tu apellido' isRequired onChange={handleInputChangeRegister} ref={lastNameRef}/>
    <FormLabel htmlFor="emailRef" marginTop="20px">Email: </FormLabel>
    <Input id="emailRef" type="email" placeholder='Escribe tu email' isRequired onChange={handleInputChangeRegister} ref={emailRef}/>
    <FormLabel htmlFor="imageRef" marginTop="20px">Picture: </FormLabel>
    <Input id="imageRef" type="file" isRequired onChange={handleInputChangeRegister} accept="image/*" ref={imageRef}/>
    <Button 
    bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)" 
    marginTop="20px" 
    color="white"
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
      isDisabled={isButtonDisabledRegister}
      onClick={()=>{
        handleSubmitRegister();
      }}
    >SEND</Button>
    </FormControl>
</Stack>
  )
}

export default Register