import { createContext, useReducer } from "react"
import { FormPutReducer, INITIAL_STATE_FORM_PUT } from "../reducer/FormPutReducer/formPut.reducer"



export const FormPutContext = createContext()

const FormPutProvider = ({children}) => {
    const  [state,dispatch] = useReducer(FormPutReducer,INITIAL_STATE_FORM_PUT)
  return (
    <FormPutContext.Provider value={{state, dispatch}}>
        {children}
    </FormPutContext.Provider>
  )
}

export default FormPutProvider