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
 
  let beforeSelectValue = ""
  let inputValueBefore = "";
  let selectValueBefore = "";
  let counter = 0;
  let searchBefore = false
   export const handleInputMovieSearch = async (nameMovie, dispatch, platformName, 
    toast, selectGenreRef ) => {
    const inputValue = nameMovie.current.value
    const selectValue = selectGenreRef.current.value
    
    
    if(inputValue === "" && selectValue === "All" && beforeSelectValue === ""  ){
      console.log('hola');
      return
    }
   

    if(beforeSelectValue !== "" && inputValue === "" && selectValue === "All" ){
      console.log('holaa');
      const moviesInput = await API(
        {endpoint:`/movies/search/*/${platformName}/*`
  
        })
        dispatch({type:'GET_MOVIES_SEARCH', payload:moviesInput.data})
        beforeSelectValue = ""
        inputValueBefore = "";
        selectValueBefore = "";
        counter = 0;
        return
    }
    
       beforeSelectValue = selectValue
       if(counter ===0 ){
        inputValueBefore = inputValue
        selectValueBefore = selectValue
       }
       if(counter > 0 ){ 
        if(inputValueBefore === inputValue && selectValueBefore === selectValue){
          toast({
            title: 'You have already searched this option',
            description: "Please try again with another search.",
            status: 'error',
            duration: 1000,
            isClosable: true,
          })
          return
        }else{
          counter = 0
        } 
      }
      
      const moviesInput = await API(
        {endpoint:`/movies/search/${inputValue === "" ? "*": inputValue}/${platformName}/${selectValue === "All" ? "*": selectValue}`
  
        })
        if (moviesInput.status === 404) {
          toast({
            title: 'No movies found.',
            description: "Try another search.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
          searchBefore = true
          handleCleanInputMovieSearch(nameMovie, dispatch, platformName,selectGenreRef)
        }
        if(moviesInput.status === 200){
          inputValueBefore = inputValue;
          selectValueBefore = selectValue;
          counter++
          dispatch({type:'GET_MOVIES_SEARCH', payload:moviesInput.data})
          searchBefore = true
        }
    }

    export const handleCleanInputMovieSearch = (nameMovie, dispatch, platformName,selectGenreRef,comeFromMenu=false) => {
        if(comeFromMenu){
            nameMovie.current.value = ""
            selectGenreRef.current.value = "All"
            dispatch({type:"SELECT_GENRE", payload:"All"})
            searchBefore = false
            console.log(nameMovie.current.value );
            console.log(selectGenreRef.current.value)
            return
        }

        if((nameMovie.current.value !== "" || selectGenreRef.current.value !== "All") && !searchBefore){
            nameMovie.current.value = ""
            selectGenreRef.current.value = "All"
            dispatch({type:"SELECT_GENRE", payload:"All"})
            console.log('hola');
            return             
        }
        if((nameMovie.current.value !== "" || selectGenreRef.current.value !== "All") && searchBefore){
          nameMovie.current.value = ""
          selectGenreRef.current.value = "All"
          dispatch({type:"SELECT_GENRE", payload:"All"})
          searchBefore = false
          getMovieSearch(platformName, dispatch)
          console.log('hola');
          return             
      }

        if(nameMovie.current.value === "" && selectGenreRef.current.value === "All" && !searchBefore){
          console.log('hola');
          return
        }  
        if(nameMovie.current.value === "" && selectGenreRef.current.value === "All" && searchBefore){
          getMovieSearch(platformName, dispatch)
          searchBefore = false
          console.log('hola');
          
          return
        }  
      
      }

      export  const customStyle = {
        fontSize: '22px',
        backgroundColor: 'transparent',
      };


     export const handlePostNewMovie =(platformName)=>{
        window.location.href = `/formPost/${platformName}`
       }
