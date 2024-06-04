import { handleClickButtonTrailer } from "../Movie/MovieFunctions"

export const handleClickMenuVideos =  (platformName,place, moviesAction,toast,navigate, moviesSearch, nameMovieRef) => {
    if(place === "Movies")
      if(moviesAction[0].platform === platformName){
        toast({
          title: "You already are at platform" +" "+ platformName,
          status: "warning",
          duration: 500,
          isClosable: true,
        })
        return
      } else{
        navigate(`/movies/${platformName}`)
      }
    
else{
  
  if(moviesSearch[0].platform === platformName){
    toast({
      title: "You already are at platform" +" "+ platformName,
      status: "warning",
      duration: 500,
      isClosable: true,
    })
    return
  }else if(moviesSearch[0].platform !== platformName){
    nameMovieRef.current.value = ""
    navigate(`/movies_Search/${platformName}`)
  }
}
}

export const handleClickMenuVideo = (type, id, navigate, user, toast) => {
     
    switch (type) {
        case "trailer":
            handleClickButtonTrailer(id,navigate)
            break;
        case "add":
            handleAddMovieToList(id, user, toast)
            break;
        case "user":
            navigate(`/user/${id}`)
            break;
        default:
            break;
    }   
}
export const handleAddMovieToList = async (id, user, toast) => {
  
  if (user.seenMovies.includes(id)) {
    toast({
        title: 'Error',
        description: "Movie already in list",
        status: 'error',
        duration: 5000,
        isClosable: true,
    });
    return;
}

user.seenMovies = [...user.seenMovies, id]

    const res = await fetch(`https://project-13-back.vercel.app/api/v1/users/${user._id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PUT",
      body: JSON.stringify({ 
          seenMovies: [id]
      }),
    });
    const answer = await res.json();
    localStorage.setItem("userName",JSON.stringify(answer))
    
    if(res.status === 400){
      toast({
        title: 'Error',
        description: "Movies could not be added to list",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    if(res.status === 200){
      toast({
        title: 'Success!',
        description: "Movies has been successfully",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
    }
}

