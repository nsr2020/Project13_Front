import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { getPlatforms } from "../reducer/PlatformsReducer/platforms.action";

import { PlatformContext } from "../providers/PlatformsProvider";

export const usePlatforms = () =>{
     const navigate = useNavigate()
     const {state,dispatch}= useContext(PlatformContext)
  const {platforms} = state;
  
  const user = localStorage.getItem("userName");

useEffect(()=>{
  if(user === null){
    navigate("/")
    }
      getPlatforms(dispatch)
    
},[user]) 
return{
platforms,navigate
}

}