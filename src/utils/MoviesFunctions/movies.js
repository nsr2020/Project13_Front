
  export const handleClickIconInfoMovie = (id, navigate) =>{
    navigate(`/movie/${id}`)
}

export  const handleClickAllMovies = (platformName) => {
  window.location.href = `/movies_Search/${platformName}`
}