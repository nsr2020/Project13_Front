export const INITIAL_STATE_MENU = {
    placement:"right"
    }
    
    export const MenuReducer = (state = INITIAL_STATE_MENU, action) =>{
        switch(action.type){
            case 'SET_PLACEMENT':
                return{
                   ...state,
                   placement:action.payload
                }
                
            default:
                return state
        }
    }