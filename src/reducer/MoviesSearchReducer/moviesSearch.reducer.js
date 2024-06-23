export const INITIAL_STATE_M_SEARCH = {
    moviesSearch:[]
    }
    
    export const MoviesSearchReducer = (state = INITIAL_STATE_M_SEARCH , action) =>{
        switch(action.type){
            case 'GET_MOVIES_SEARCH':
                return{
                   ...state,
                    moviesSearch:[...action.payload]
                }
                
            default:
                return state
        }
    }