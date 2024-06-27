import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { StartPageContext } from "../providers/StartPageProvider";

export const useStartPage = ()=>{
    const {state, dispatch} = useContext(StartPageContext)
  const {IsFormsArea, form,isLoadingLogin, isButtonDisabledLogin, isLoadingRegister, isButtonDisabledRegister }= state;
  const user = localStorage.getItem('userName')
  const navigate = useNavigate()
  useEffect(()=>{
    if(user){
      navigate("/platforms")
    }
  })
  return{
    IsFormsArea,dispatch,form,isLoadingLogin,isButtonDisabledLogin,isLoadingRegister,isButtonDisabledRegister
  }
}