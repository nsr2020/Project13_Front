import { API } from "../../API/API"
import { handleClickButtonTrailer } from "../Movie/MovieFunctions"
import { handleCleanInputMovieSearch } from "../MoviesSearch/movieSearchFuntions";

export const handleClickMenuVideos =  (platformName,place, moviesAction,toast,
  navigate, moviesSearch, nameMovieRef,selectGenreRef, dispatch,onClose) => {
    let comeFromMenu = true 
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
        navigate(`/movies/${platformName}`, {state:{demo:"demo"}})
      }
    
else if(place === "MoviesSearch"){
  
  if(moviesSearch[0].platform === platformName){
    toast({
      title: "You already are at platform" +" "+ platformName,
      status: "warning",
      duration: 1000,
      isClosable: true,
    })
    return
  }else if(moviesSearch[0].platform !== platformName){
    /* nameMovieRef.current.value = ""
    selectGenreRef.current.value = "All"
    dispatch({type:"SELECT_GENRE", payload:"All"}) */
    navigate(`/movies_Search/${platformName}`)
    onClose()
    handleCleanInputMovieSearch(nameMovieRef, dispatch, platformName,selectGenreRef,comeFromMenu)
  }
}else if(place === "MoviesAdmin") {
  if(moviesSearch[0].platform === platformName){
    toast({
      title: "You already are at platform" +" "+ platformName,
      status: "warning",
      duration: 500,
      isClosable: true,
    })
    return
  }else if(moviesSearch[0].platform !== platformName){
   /*  nameMovieRef.current.value = ""
    selectGenreRef.current.value ="All"
    dispatch({ type: "SELECT_GENRE", payload: "All" });  */
    handleCleanInputMovieSearch(nameMovieRef, dispatch, platformName,selectGenreRef,comeFromMenu)
    navigate(`/moviesAdmin/${platformName}`)
    onClose()
  }
}
}

export const handleClickMenuVideo = (type, id, navigate, user, toast, platformName,place) => {
     
    switch (type) {
        case "trailer":
            handleClickButtonTrailer(id,platformName,navigate,place)
            break;
        case "add":
            handleAddMovieToList(id, user, toast)
            break;
        case "user":
            navigate(`/user/${id}/${place}`)
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

