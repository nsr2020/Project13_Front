export const fetchTrailer = (id, dispatch)=>{
    fetch(`https://project-13-back.vercel.app/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data =>{
      dispatch({type:"SET_TRAILER", payload:data})
    
    });
}