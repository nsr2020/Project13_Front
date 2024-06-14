import { Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router';
import { handleSubmitLogin } from '../../../reducer/StartPageReducer/startPage.action';
import debounce from 'lodash.debounce';

const Login = ({dispatch, isLoadingLogin, isButtonDisabledLogin }) => {
    const toast = useToast();
    const navigate = useNavigate();
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const lastToastTimeRef = useRef(0);
    const [debounceTimer, setDebounceTimer] = useState(null);

    const showToast = () => {
        toast({
            title: "User y password deben tener min de 5 letras y una mayúscula al principio",
            status: "error",
            duration: 1500,
            isClosable: true,
        });
        lastToastTimeRef.current = Date.now();
    };
   
    const handleChange = () => {
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        const now = Date.now();
        const debounceInterval = 5000; // Interval after which the toast can reappear

        if (userName.length < 5 || !(/^(?=.*[A-Z]).{5,}$/.test(password))) {
            if (now - lastToastTimeRef.current > debounceInterval) {
                showToast();
            }
        }

        if (userName.length >= 5 && /^(?=.*[A-Z]).{5,}$/.test(password)) {
            dispatch({ type: "IS_LOGIN_BUTTON", payload: false });
            if (debounceTimer) {
                clearTimeout(debounceTimer);
                setDebounceTimer(null);
            }
        } else {
            dispatch({ type: "IS_LOGIN_BUTTON", payload: true });
            if (!debounceTimer) {
                setDebounceTimer(setTimeout(() => {
                    if (userName.length < 5 || !(/^(?=.*[A-Z]).{5,}$/.test(password))) {
                        showToast();
                    }
                }, debounceInterval));
            }
        }
    };

    useEffect(() => {
        return () => {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
        };
    }, [debounceTimer]);

    return (
        <>
             <Stack border='3px solid black' 
             padding='var(--nsr-padding2)' 
             borderRadius='var(--nsr-bradius2)' gap="var(--nsr-gap1)" 
             background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))">
             <h2 style={{ color: "var(--nsr-color2)" }}>LOGIN</h2>
             <FormControl display="flex" flexDir="column" align="center" 
             background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))" 
             color="var(--nsr-color1)">
                 <FormLabel htmlFor="userName">User: </FormLabel>
                 <Input id="userName" type="text" placeholder='Debe tener 5 letras min' 
                 isRequired ref={userNameRef} onChange={handleChange} title='Debe tener 5 letras o mas..'/>
                 
                 <FormLabel htmlFor="password" marginTop="var(--nsr-margin2)">Password: </FormLabel>
                 <Input id="password" type="password" placeholder='5 letras y una mayúscula' pattern="^(?=.*[A-Z]).{5,}$"
                     title="Debe contener al menos 5 letras y una mayúscula" isRequired ref={passwordRef} 
                     onChange={()=>{
                        handleChange()
                        }} />
                 <Button
                     bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"
                     marginTop="var(--nsr-margin2)"
                     color="var(--nsr-color1)"
                     _hover={{
                         transform: "scale(1.1)",
                         transition: "var(--nsr-transition)",
                     }}
                     onClick={()=>{
                         handleSubmitLogin(userNameRef.current.value, passwordRef.current.value, toast, navigate, dispatch);
                     }}
                     isDisabled={isButtonDisabledLogin}
                     isLoading={isLoadingLogin}
                     loadingText='Loading'
                     colorScheme='var(--nsr-color5)'
                     variant='outline'
                     spinnerPlacement='start'
                 >SEND</Button>
             </FormControl>
         </Stack>
         
       </>
    );
};
export default Login;
