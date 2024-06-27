import { createContext, useReducer } from "react"
import { INITIAL_STATE_SP, StartPageReducer } from "../reducer/StartPageReducer/startPage.reducer"

export const StartPageContext = createContext()

const StartPageProvider = ({children}) => {
    const [state, dispatch] = useReducer(StartPageReducer, INITIAL_STATE_SP)
  return (
    <StartPageContext.Provider value={{state, dispatch}}>
       {children}
        </StartPageContext.Provider>
  )
}

export default StartPageProvider