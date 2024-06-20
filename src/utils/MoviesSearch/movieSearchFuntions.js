import { urlMoviesbyName, urlMoviesByPlatformAndCategory } from "../infoFetchUrl/fetchUrl";

export const getMovieSearch = (platformName, setMoviesSearch, noMovies, toast) =>{
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

   export const handleInputMovieSearch = (nameMovie, setMoviesSearch, platformName, toast) => {
    
    if(nameMovie.current.value === ""){
      return
    }
    fetch(`${urlMoviesbyName}${nameMovie.current.value}/*/*`)
    .then(response =>response.json())
    .then(data =>{
      setMoviesSearch(data)
      if (!data.length) {
        let noMovies = true;
        getMovieSearch(platformName, setMoviesSearch, noMovies, toast);
      }
    })
    
    }

    export const handleCleanInputMovieSearch = (nameMovie, setMoviesSearch, platformName) => {
        if(nameMovie.current.value !== ""){
            nameMovie.current.value = ""
            getMovieSearch(platformName, setMoviesSearch) 
        }else if(nameMovie.current.value === ""){
            return
        }
        
        
      }

