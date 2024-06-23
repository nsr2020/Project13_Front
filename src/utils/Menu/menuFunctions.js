import { API } from "../../API/API"
import { urlUserInfo } from "../infoFetchUrl/fetchUrl"
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

export const handleClickMenuVideo = (type, id, navigate, user, toast, platformName) => {
     
    switch (type) {
        case "trailer":
            handleClickButtonTrailer(id,platformName,navigate)
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
        duration: 500,
        isClosable: true,
    });
    return;
  }

  user.seenMovies = [...user.seenMovies, id]

    const res = await API({endpoint:`/users/${user._id}`, method:"PUT",body:{seenMovies:[id]} },{

    });
    
    localStorage.setItem("userName",JSON.stringify(res.data))
    
    if(res.status === 400){
      toast({
        title: 'Error',
        description: "Movies could not be added to list",
        status: 'error',
        duration: 500,
        isClosable: true,
      })
    }
    if(res.status === 200){
      toast({
        title: 'Success!',
        description: "Movie has been added successfully",
        status: 'success',
        duration: 500,
        isClosable: true,
      })
      
    }
}

