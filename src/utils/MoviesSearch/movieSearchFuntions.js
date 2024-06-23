import { API } from "../../API/API";
import { getMovieSearch } from "../../reducer/MoviesSearchReducer/moviesSearch.action";

/* export const getMovieSearch = (platformName, setMoviesSearch, noMovies, toast) =>{
    fetch(`${urlMoviesByPlatformAndCategory}${platformName}/*`)
    .then(response => response.json())
    .then(data =>{
     setMoviesSearch(data)
    });
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
 */
   export const handleInputMovieSearch = async (nameMovie, dispatch, platformName, toast) => {
    
    if(nameMovie.current.value === ""){
      return
    }
    const moviesInput = await API({endpoint:`/movies/search/${nameMovie.current.value}/*/*`})
    console.log(moviesInput)
      dispatch({type:'GET_MOVIES_SEARCH', payload:moviesInput.data})
      if (moviesInput.status === 404) {
        let noMovies = true;
        getMovieSearch(platformName, dispatch, noMovies, toast);
      }
    }

    export const handleCleanInputMovieSearch = (nameMovie, dispatch, platformName) => {
        if(nameMovie.current.value !== ""){
            nameMovie.current.value = ""
            getMovieSearch(platformName, dispatch) 
        }else if(nameMovie.current.value === ""){
            return
        }
        
        
      }

      export  const customStyle = {
        fontSize: '22px',
        backgroundColor: 'transparent',
      };

