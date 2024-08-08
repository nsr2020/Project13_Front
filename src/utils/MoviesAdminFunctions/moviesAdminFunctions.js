import { API } from "../../API/API"


export const  handleClickDeleteImage = async(movieId,dispatch,toast,platformName,navigate) => {

try{
    const response = await API({
        endpoint:`/movies/${movieId}`,
        method: "DELETE",
    })
    if(response.status === 200){
        /* dispatch({ type: 'DELETE_MOVIE', payload: movieId }); */
        toast({
            title: 'Movie deleted successfully',
            description: "",
            status: 'success',
            duration: 1000,
            isClosable: true,
          });
          /* navigate(`/moviesAdmin/${platformName}`) */
          window.location.href = `/moviesAdmin/${platformName}`
          /* getMovieSearch(platformName, dispatch, false, toast)   */
        
    }
}catch{
    toast({
        title: 'Error',
        description: "Movie could not be deleted",
        status: 'error',
        duration: 500,
        isClosable: true,
      });
}

}