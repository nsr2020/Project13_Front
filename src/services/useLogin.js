import { useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
    const toast = useToast();
	const navigate = useNavigate();
	const userNameRef = useRef(null);
	const passwordRef = useRef(null);
	const userName = userNameRef?.current?.value || "";
	const password = passwordRef?.current?.value || "";
	const isValidPassword = /^(?=.*[A-Z]).{5,}$/.test(password);
    return{
   toast,navigate,userNameRef,passwordRef,userName,password,isValidPassword
    }
}