
  export const handleClickIconInfoMovie = (id, navigate, place) =>{
    navigate(`/movie/${id}/${place}`);
}

export  const handleClickAllMovies = (platformName) => {
  window.location.href = `/movies_Search/${platformName}`
}