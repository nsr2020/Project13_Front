import { useCallback, useContext, useEffect } from "react";
import { TrailerContext } from "../providers/TrailerProvider";
import { useNavigate, useParams } from "react-router";
import { fetchGif, fetchTrailer } from "../reducer/TrailerReducer/trailer.action";


export const useTrailer = () =>{
    const {state,dispatch}=useContext(TrailerContext)
    const {trailer, playing , gif}= state;
    const {id, platformName,place} = useParams()
    const user = localStorage.getItem("userName")
    const navigate = useNavigate()
  
    const handlePlay = useCallback(() => {
        dispatch({ type: "SET_PLAYING" });
      }, [dispatch]);
  
    useEffect(()=>{
      if(!user){
        navigate("/")
        return
      }
      if(JSON.parse(user).rol === "admin"){
        navigate(`/moviesAdmin/${platformName}`)
        return;
      }
      fetchTrailer(id,dispatch)
      fetchGif(platformName,dispatch)
    },[user])
    return{
        trailer,playing,gif,handlePlay,place
    }
}