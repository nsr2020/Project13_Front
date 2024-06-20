import { urlMovieById } from "../infoFetchUrl/fetchUrl";

export const handleClickButtonTrailer = (id, platformName ,navigate) =>{
    navigate(`/trailer/${id}/${platformName}`)
}

export const fetchMovie =(id, setMovie)=>{
    fetch(`${urlMovieById}${id}`)
    .then(response => response.json())
    .then(data =>{
     setMovie(data)
    
    });
}

export const customStyle = {
    fontSize: '22px',
    backgroundColor: 'transparent',
  };