import { createContext, useReducer } from "react"
import { INITIAL_STATE_PLATFORMS, PlatformsReducer } from "../reducer/PlatformsReducer/platforms.reducer"

export const PlatformContext = createContext()

const PlatformsProvider = ({children}) => {
    const [state, dispatch] = useReducer(PlatformsReducer, 
        INITIAL_STATE_PLATFORMS)
 
  return (
    <PlatformContext.Provider value={{state, dispatch}}>
        {children}
    </PlatformContext.Provider>
  )
}

export default PlatformsProvider