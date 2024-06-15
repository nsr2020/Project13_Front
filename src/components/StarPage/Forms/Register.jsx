import { Button, FormControl, FormLabel, Input, Stack, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { handleSubmitRegister } from "../../../reducer/StartPageReducer/startPage.action";

const Register = ({dispatch, isLoadingRegister, isButtonDisabledRegister}) => {
  const toast = useToast();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();
  
  const isValidPassword = (password) => /^(?=.*[A-Z]).{5,}$/.test(password);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const handleInputChangeRegister = () => {
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;

    if (userName.length >= 5 && isValidPassword(password) && name.length > 0 && lastName.length > 0 && isValidEmail(email)) {
      dispatch({type: "IS_REGISTER_BUTTON", payload: false});
    } else {
      dispatch({type: "IS_REGISTER_BUTTON", payload: true});
    }
  };

  const handleFileInputClick = () => {
    imageRef.current.click();
  };

  const handleSubmitClick = () => {
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const avatar = imageRef.current.files[0] || "/assets/fotoperfil.jpg";
    
    handleSubmitRegister(userName, password, name, lastName, email, avatar, toast, navigate, dispatch);
  };

  return (
    <Stack mb="var(--nsr-margin7)" outline='3px solid black' 
      padding='var(--nsr-padding2)' borderRadius='var(--nsr-bradius2)' 
      gap="var(--nsr-gap1)" width="140%"
      background="linear-gradient(135deg,var(--nsr-color19), var(--nsr-color20))">
      <h2 style={{color:"var(--nsr-color2)"}}>REGISTER</h2>
      <FormControl display="flex"  flexDir="var(--nsr-direction1)" 
        align="center" background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))" color="white">
        <FormLabel htmlFor="userNameRef">User: </FormLabel>
        <Input id="userNameRef" type="text" placeholder='Debe tener min de 5 letras..' 
          title="Debe tener más de 5 letras.." isRequired pattern=".{5,}" onChange={handleInputChangeRegister} ref={userNameRef} />
        <FormLabel htmlFor="passwordRef" marginTop="var(--nsr-margin2)">Password: </FormLabel>
        <Input id="passwordRef" type="password" placeholder=' 5 letras min y una mayúscula' pattern="^(?=.*[A-Z]).{5,}$"
          title="Debe contener al menos 5 letras y una mayúscula" isRequired onChange={handleInputChangeRegister} ref={passwordRef} />
        <FormLabel htmlFor="nameRef" marginTop="var(--nsr-margin2)">Name: </FormLabel>
        <Input id="nameRef" type="text" placeholder='Escribe tu nombre' isRequired onChange={handleInputChangeRegister} ref={nameRef} />
        <FormLabel htmlFor="lastNameRef" marginTop="var(--nsr-margin2)">LastName: </FormLabel>
        <Input id="lastNameRef" type="text" placeholder='Escribe tu apellido' isRequired onChange={handleInputChangeRegister} ref={lastNameRef} />
        <FormLabel htmlFor="emailRef" marginTop="var(--nsr-margin2)">Email: </FormLabel>
        <Input id="emailRef" type="email" placeholder='Escribe tu email' isRequired onChange={handleInputChangeRegister} ref={emailRef} />

        <FormLabel htmlFor="imageRef" marginTop="var(--nsr-margin2)">Picture: </FormLabel>
        <Input id="imageRef" type="file" isRequired onChange={handleInputChangeRegister} accept="image/*" ref={imageRef} style={{display: 'none'}} />
        <Button 
          bgGradient="linear(to-br, var(--nsr-color1), var(--nsr-color5), var(--nsr-color4))"
          color="var(--nsr-color1)"
          _hover={{
            transform: "scale(1.1)",
            transition: "var(--nsr-transition)",
          }}
          onClick={handleFileInputClick}
        >
          Select Picture
        </Button>
        {imageRef.current?.files[0] ? (
          <p style={{color: "white", marginTop: "var(--nsr-margin1)"}}>{imageRef.current.files[0].name}</p>
        ):(
          <p style={{color: "white", marginTop: "var(--nsr-margin1)"}}>No file selected</p>
        )}

        <Button 
          bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))" 
          marginTop="var(--nsr-margin2)" 
          color="var(--nsr-color1)"
          _hover={{
            transform: "scale(1.1)",
            transition: "var(--nsr-transition)",
          }}
          isDisabled={isButtonDisabledRegister}
          onClick={handleSubmitClick}
          isLoading={isLoadingRegister}
          loadingText='Loading'
          colorScheme='var(--nsr-color5)'
          variant='outline'
          spinnerPlacement='start'
        >
          SEND
        </Button>
      </FormControl>
    </Stack>
  );
};

export default Register;

