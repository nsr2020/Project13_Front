export const INITIAL_STATE_PLATFORMS = {
platforms:[]
}

export const PlatformsReducer = (state = INITIAL_STATE_PLATFORMS, action) =>{
    switch(action.type){
        case 'GET_PLATFORMS':
            return{
               ...state,
                platforms:[...action.payload]
            }
            
        default:
            return state
    }
}