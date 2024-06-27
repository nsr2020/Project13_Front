import { useContext, useEffect } from "react";

import { useParams } from "react-router";
import { fetchMovies } from "../reducer/MoviesReducer/movies.action";
import { MoviesContext } from "../providers/MoviesProvider";


const useMovies = ()=>{
    const {state, dispatch} = useContext(MoviesContext);
    const {indexAction, indexComedy, indexHorror, indexKids,indexReleases, 
      moviesAction, moviesComedy, moviesHorror, moviesKids,moviesReleases }= state;
      const { platformName } = useParams();
      const user = localStorage.getItem('userName'); 
      useEffect(() => {
        if (!user) {
          window.location.href = "/"; 
          return;
        }
        fetchMovies(platformName, dispatch)
      }, [platformName, user]);

      return{
        moviesAction,moviesComedy,moviesHorror,moviesKids,
        moviesReleases,platformName,dispatch,indexAction,
        indexComedy,indexHorror,indexKids,indexReleases
      }
}
export default useMovies;