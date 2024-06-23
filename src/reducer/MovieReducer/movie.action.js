import { API } from "../../API/API"

export const fetchMovie = async(id, dispatch)=>{
  /*   fetch(`${urlMovieById}${id}`)
    .then(response => response.json())
    .then(data =>{
     setMovie(data)
    
    }); */
    const {data} = await API({endpoint:`/movies/${id}`})
    
    dispatch({type:"GET_MOVIE", payload:data})
}