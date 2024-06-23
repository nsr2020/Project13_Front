export const INITIAL_STATE_USER = {
    userMovies:[]
    }
    
    export const UserReducer = (state = INITIAL_STATE_USER, action) =>{
        switch(action.type){
            case 'GET_USER':
                return{
                   ...state,
                   userMovies:[...action.payload]
                }
                
            default:
                return state
        }
    }