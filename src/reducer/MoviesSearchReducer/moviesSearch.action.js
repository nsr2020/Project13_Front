import { API } from "../../API/API";

export const getMovieSearch = async (platformName, dispatch, noMovies, toast) =>{
   /*  fetch(`${urlMoviesByPlatformAndCategory}${platformName}/*`)
    .then(response => response.json())
    .then(data =>{
     setMoviesSearch(data)
    }); */
    const {data} = await API({endpoint:`/movies/search/*/${platformName}/*`})
    dispatch({type:"GET_MOVIES_SEARCH", payload:data})
    if (noMovies) {
        toast({
            title: 'No movies found.',
            description: "Try another search.",
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
    }
  }
