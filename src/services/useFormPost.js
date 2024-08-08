import { useContext, useEffect, useRef } from "react"
import {  FormPostContext } from "../providers/FormPostProvider"
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";

export const useFormPost = ()=>{
   const {state, dispatch} = useContext(FormPostContext) 
    const {isButtonDisabledPost, isLoadingPost} = state;
	const {platformName} = useParams()
    const nameRef = useRef(null);
	const categoryRef = useRef(null);
    const trailerRef = useRef(null);
    const starsRef = useRef(null);
    const platformRef = useRef(null);
	const imageRef = useRef(null);
    const toast = useToast()
    const navigate = useNavigate()

	const name = nameRef?.current?.value || "";
	const image = imageRef?.current?.files[0] || "/assets/cinema.png";
    const category = categoryRef?.current?.value
    const trailer = trailerRef?.current?.value || "";
    const stars = starsRef?.current?.value || "";
    const platform = platformRef?.current?.value || "";


    const user = localStorage.getItem("userName");
    const rol = JSON.parse(user).rol
    useEffect(()=>{
        if(!user || rol!== 'admin'){
            navigate("/")
        }
    },[user])
	
   return{
     isButtonDisabledPost, isLoadingPost, dispatch,toast,navigate,name,
     image,nameRef,imageRef,categoryRef,trailerRef,starsRef,platformRef,platformName,
     category,trailer,stars,platform
   }
}