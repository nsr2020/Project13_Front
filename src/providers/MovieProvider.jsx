import { createContext, useReducer } from "react"
import { INITIAL_STATE_MOVIE, MovieReducer } from "../reducer/MovieReducer/movie.reducer"


export const MovieContext = createContext()

const MovieProvider = ({children}) => {
    const [state, dispatch]= useReducer(MovieReducer,INITIAL_STATE_MOVIE)
  return (
    <MovieContext.Provider value={{state, dispatch}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider