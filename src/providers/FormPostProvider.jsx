import  { createContext, useReducer } from 'react'
import { FormPostReducer, INITIAL_STATE_FORM_POST } from '../reducer/FormPostReducer/formPost.reducer'


export const FormPostContext = createContext()

const FormPostProvider = ({children}) => {
    const  [state,dispatch] = useReducer(FormPostReducer,INITIAL_STATE_FORM_POST)
  return (
    <FormPostContext.Provider value={{state, dispatch}}>
        {children}
    </FormPostContext.Provider>
  )
}

export default FormPostProvider