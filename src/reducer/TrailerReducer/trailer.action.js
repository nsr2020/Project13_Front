import { API } from "../../API/API";

export const fetchTrailer = async(id, dispatch)=>{
    const {data} = await API({endpoint:`/movies/${id}`})
    dispatch({type:"SET_TRAILER", payload:data})
}

export const fetchGif = async (platformName,dispatch)=>{
  const {data} = await API({endpoint:`/platforms/name/${platformName}`})
  dispatch({type:"SET_GIF", payload:data})
}