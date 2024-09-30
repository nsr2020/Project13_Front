import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { getPlatforms } from "../reducer/PlatformsReducer/platforms.action";

import { PlatformContext } from "../providers/PlatformsProvider";

export const usePlatforms = () =>{
     const navigate = useNavigate()
     const {state,dispatch}= useContext(PlatformContext)
  const {platforms} = state;
  
  const user = localStorage.getItem("userName");
  const platformName = "Netflix"

useEffect(()=>{
  if(user === null){
    navigate("/")
    }
    if(JSON.parse(user).rol === "admin"){
      navigate(`/moviesAdmin/${platformName}`)
      return
    }
      getPlatforms(dispatch)
    
},[user]) 
return{
platforms,navigate
}

}