import { createContext, useReducer } from "react"
import { INITIAL_STATE_TRAILER, trailerReducer } from "../reducer/TrailerReducer/trailer.reducer"

export const TrailerContext = createContext()

const TrailerProvider = ({children}) => {
    const [state, dispatch] = useReducer(trailerReducer, INITIAL_STATE_TRAILER)
  return (
    <TrailerContext.Provider value={{state, dispatch}}>
        {children}
    </TrailerContext.Provider>
  )
}

export default TrailerProvider