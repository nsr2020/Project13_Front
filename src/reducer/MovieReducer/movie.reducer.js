export const INITIAL_STATE_MOVIE = {
    movie:{}
    }
    
    export const MovieReducer = (state = INITIAL_STATE_MOVIE, action) =>{
        switch(action.type){
            case 'GET_MOVIE':
                return{
                   ...state,
                   movie:{...action.payload}
                }
                
            default:
                return state
        }
    }