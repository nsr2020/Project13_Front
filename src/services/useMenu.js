import {  useContext } from "react";
import { useNavigate } from "react-router";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { MenuContext } from "../providers/MenuProvider";


export const useMenu = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {state, dispatch}=useContext(MenuContext)
    const {placement}= state;
    const toast = useToast()
    const navigate = useNavigate()
    const  user = JSON.parse(localStorage.getItem('userName'))
     
  return{
    isOpen,onOpen,onClose,dispatch,toast,navigate,placement,user
  }
}