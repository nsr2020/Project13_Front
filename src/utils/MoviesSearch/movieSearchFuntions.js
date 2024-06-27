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
   export const handleInputMovieSearch = async (nameMovie, dispatch, platformName, toast, selectGenreRef) => {
    const inputValue = nameMovie.current.value
    const selectValue = selectGenreRef.current.value
    if(inputValue === "" && selectValue === "All"){
      return
    }
   /*  if(selectGenreRef.current.value === "All" ){
      selectGenreRef.current.value = "*"
    }
    if(nameMovie.current.value ===""){
      nameMovie.current.value ="*"
    } */
    const moviesInput = await API(
      {endpoint:`/movies/search/${inputValue === "" ? "*": inputValue}/*/${selectValue === "All" ? "*": selectValue}`

      })
      dispatch({type:'GET_MOVIES_SEARCH', payload:moviesInput.data})
      if (moviesInput.status === 404) {
        let noMovies = true;
        getMovieSearch(platformName, dispatch, noMovies, toast);
      }
    }

    export const handleCleanInputMovieSearch = (nameMovie, dispatch, platformName,selectedGenreRef) => {
        if(nameMovie.current.value !== "" || selectedGenreRef.current.value !== "All"){
            nameMovie.current.value = ""
            selectedGenreRef.current.value = "All"
            dispatch({type:"SELECT_GENRE", payload:"All"})
            getMovieSearch(platformName, dispatch) 
        }else if(nameMovie.current.value === "" && selectedGenreRef.current.value === "All"){
            return
        }
        
        
      }

      export  const customStyle = {
        fontSize: '22px',
        backgroundColor: 'transparent',
      };

