import { useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { getMovieSearch } from "../reducer/MoviesSearchReducer/moviesSearch.action";
import { MoviesSearchContext } from "../providers/MoviesSearchProvider";



const useMoviesSearch = ()=>{
    const {platformName} = useParams()
    const user = localStorage.getItem('userName')
    const {state, dispatch} = useContext(MoviesSearchContext)
    const {moviesSearch, selectedGenre} = state;
    const nameMovieRef = useRef(null);
    const selectGenreRef = useRef(null);
    const toast = useToast();
    const navigate = useNavigate()
   
    
    useEffect(()=>{
      if(!user){
        window.location.href = '/'
      }
      if(JSON.parse(user).rol === "admin"){
        navigate(`/moviesAdmin/${platformName}`)
        return
      }
      getMovieSearch(platformName, dispatch) 
    },[user,platformName,selectGenreRef])

    return{
        moviesSearch,nameMovieRef,dispatch,platformName,
        selectGenreRef, toast, navigate,selectedGenre
    }
}
export default useMoviesSearch