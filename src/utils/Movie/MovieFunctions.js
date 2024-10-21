

export const handleClickButtonTrailer = (id, platformName ,navigate,place) =>{
    navigate(`/trailer/${id}/${platformName}/${place}`, {state:{demo:"demo"}})
}

/* export const fetchMovie =(id, setMovie)=>{
    fetch(`${urlMovieById}${id}`)
    .then(response => response.json())
    .then(data =>{
     setMovie(data)
    
    });
} */

export const customStyle = {
    fontSize: '22px',
    backgroundColor: 'transparent',
  };