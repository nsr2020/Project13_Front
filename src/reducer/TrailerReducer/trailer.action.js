import { urlTrailer,urlGif } from "../../utils/infoFetchUrl/fetchUrl";

export const fetchTrailer = (id, dispatch)=>{
    fetch(`${urlTrailer}${id}`)
    .then(response => response.json())
    .then(data =>{
      dispatch({type:"SET_TRAILER", payload:data})
    
    });
}

export const fetchGif = (platformName,dispatch)=>{
  fetch(`${urlGif}${platformName}`)
 .then(response => response.json())
 .then(data =>{
 
    dispatch({type:"SET_GIF", payload:data})
  });
}