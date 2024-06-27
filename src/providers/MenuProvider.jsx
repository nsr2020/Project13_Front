
import { createContext, useReducer } from "react"
import { INITIAL_STATE_MENU, MenuReducer } from "../reducer/MenuReducer/menu.reducer"


export const MenuContext = createContext()
const MenuProvider = ({children}) => {

    const[state, dispatch]= useReducer(MenuReducer,INITIAL_STATE_MENU)

  return (
    <MenuContext.Provider value={{state, dispatch}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider