import { useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";


export const useRegister = ()=>{
    const toast = useToast();
	const userNameRef = useRef(null);
	const passwordRef = useRef(null);
    const nameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const imageRef = useRef(null);
	const navigate = useNavigate();

    const userName = userNameRef?.current?.value || "";
	const password = passwordRef?.current?.value || "";
	const name = nameRef?.current?.value || "";
	const lastName = lastNameRef?.current?.value || "";
	const email = emailRef?.current?.value || "";
	const avatar = imageRef?.current?.files[0] || "/assets/fotoperfil.jpg";
	const isValidPassword = (password) => /^(?=.*[A-Z]).{5,}$/.test(password);
	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	

    return{
      toast,userNameRef,passwordRef,nameRef,lastNameRef,emailRef,imageRef,navigate,
      userName,password,name,lastName,email,avatar,isValidEmail,isValidPassword
    }
}