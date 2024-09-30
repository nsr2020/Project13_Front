import { useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { MoviesSearchContext } from "../providers/MoviesSearchProvider";
import { getMovieSearch } from "../reducer/MoviesSearchReducer/moviesSearch.action";

const useMoviesAdmin = ()=>{

const {platformName} = useParams()
const user = localStorage.getItem('userName')
const {state, dispatch} = useContext(MoviesSearchContext)
const {moviesSearch, selectedGenre} = state;
const nameMovieRef = useRef(null);
const selectGenreRef = useRef(null);
const toast = useToast();
const navigate = useNavigate()
const rol = JSON.parse(user).rol

useEffect(()=>{
  if(!user || rol!== 'admin'){
    navigate("/")
    return
}
  getMovieSearch(platformName, dispatch) 
},[user,platformName, dispatch])

return{
    moviesSearch,nameMovieRef,dispatch,platformName,
    selectGenreRef, toast, navigate,selectedGenre,rol
}
}
export default useMoviesAdmin