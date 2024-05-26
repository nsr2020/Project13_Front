export const handleClickButtonTrailer = (id, navigate) =>{
    navigate(`/trailer/${id}`)
}

export const fetchMovie =(id, setMovie)=>{
    fetch(`https://project-13-back.vercel.app/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data =>{
     setMovie(data)
    
    });
}

export const customStyle = {
    fontSize: '22px',
    backgroundColor: 'transparent',
  };