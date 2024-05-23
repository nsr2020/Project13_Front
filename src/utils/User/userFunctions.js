export const getUserInfo = (id, setUserMovies) =>{
    fetch(`https://project-13-back.vercel.app/api/v1/users/${id}`)
    .then((res)=> res.json())
    .then((data)=> setUserMovies(data.seenMovies))
}