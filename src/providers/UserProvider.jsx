import { createContext, useReducer } from "react"
import { INITIAL_STATE_USER, UserReducer } from "../reducer/UserInfoReducer/user.reducer"

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE_USER)
  return (
    <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
