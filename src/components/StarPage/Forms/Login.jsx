import { Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router';
import { handleSubmitLogin } from '../../../reducer/movies.action';

const Login = () => {
    const [isLoadingLogin, setIsLoadingLogin] = useState(false)
    const [isButtonDisabledLogin, setIsButtonDisabledLogin] = useState(true);
    const toast = useToast();
    const navigate = useNavigate();
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleInputChangeLogin = () => {
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        setIsButtonDisabledLogin(!(userName.length >= 5 && /^(?=.*[A-Z]).{5,}$/.test(password))); 
    };

    return (
        <>
             <Stack border='3px solid black' padding='20px' borderRadius='20px' gap="10px" background="linear-gradient(135deg, #391F5B, #12007a)">
             <h2 style={{ color: "yellow" }}>LOGIN</h2>
             <FormControl display="flex" flexDir="column" align="center" background="linear-gradient(135deg, #391F5B, #12007a)" color="white">
                 <FormLabel htmlFor="userName">User: </FormLabel>
                 <Input id="userName" type="text" placeholder='Escribe tu usuario...' 
                 isRequired ref={userNameRef} onChange={handleInputChangeLogin} title='Debe tener 5 letras o mas..'/>
                 <FormLabel htmlFor="password" marginTop="20px">Password: </FormLabel>
                 <Input id="password" type="password" placeholder='Escribe tu contraseña...' pattern="^(?=.*[A-Z]).{5,}$"
                     title="Debe contener al menos 5 letras y una mayúscula" isRequired ref={passwordRef} onChange={handleInputChangeLogin} />
                 <Button
                     bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"
                     marginTop="20px"
                     color="white"
                     _hover={{
                         transform: "scale(1.1)",
                         transition: "all 0.5s",
                     }}
                     onClick={()=>{
                         handleSubmitLogin(userNameRef.current.value, passwordRef.current.value, toast, navigate,setIsLoadingLogin);
                     }}
                     isDisabled={isButtonDisabledLogin}
                     isLoading={isLoadingLogin}
                     loadingText='Loading'
                     colorScheme='teal'
                     variant='outline'
                     spinnerPlacement='start'
                 >SEND</Button>
             </FormControl>
         </Stack>
         
       </>
    );
};

export default Login;
