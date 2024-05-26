import { Button, FormControl, FormLabel, Input, Stack, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import {  handleSubmitRegister } from "../../../reducer/StartPageReducer/startPage.action";

const Register = ({dispatch, isLoadingRegister, isButtonDisabledRegister}) => {
  const toast = useToast();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChangeRegister = () => {
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;

    const isValidPassword = /^(?=.*[A-Z]).{5,}$/.test(password);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if(userName.length >= 5 && isValidPassword && name.length > 0 && lastName.length > 0 && isValidEmail){
          dispatch({type: "IS_REGISTER_BUTTON", payload:false})
        }else{
          dispatch({type: "IS_REGISTER_BUTTON", payload:true})
        }
};

  return (
    <Stack mb="20" outline='3px solid black' padding='20px' borderRadius='20px' gap="10px"
     background="linear-gradient(135deg, #391F5B, #12007a)">
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
        handleSubmitRegister(userNameRef.current.value, passwordRef.current.value,nameRef.current.value,lastNameRef.current.value
          ,emailRef.current.value,imageRef.current.files[0] || "/assets/fotoperfil.jpg", 
          toast, navigate, dispatch
        );
      }}
      isLoading={isLoadingRegister}
                     loadingText='Loading'
                     colorScheme='teal'
                     variant='outline'
                     spinnerPlacement='start'
    >SEND</Button>
    </FormControl>
</Stack>
  )
}
export default Register