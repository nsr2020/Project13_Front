export const getMovieSearch = (platformName, setMoviesSearch, noMovies, toast) =>{
    fetch(`https://project-13-back.vercel.app/api/v1/movies/platform/${platformName}`)
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