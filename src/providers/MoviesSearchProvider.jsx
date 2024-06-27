import { createContext, useReducer } from "react"
import { INITIAL_STATE_M_SEARCH, MoviesSearchReducer } from "../reducer/MoviesSearchReducer/moviesSearch.reducer"

export const MoviesSearchContext = createContext()

const MoviesSearchProvider = ({children}) => {
    const [state, dispatch]= useReducer(MoviesSearchReducer, INITIAL_STATE_M_SEARCH)
  return (
    <MoviesSearchContext.Provider value={{state,dispatch}}>
        {children}
        </MoviesSearchContext.Provider>
  )
}

export default MoviesSearchProvider
