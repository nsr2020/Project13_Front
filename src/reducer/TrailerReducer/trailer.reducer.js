export const INITIAL_STATE_TRAILER = {
    trailer: null,
    playing: false
}

export const trailerReducer = (state = INITIAL_STATE_TRAILER, action) =>{
    switch(action.type){
        case "SET_TRAILER":
            return{
               ...state,
                trailer: action.payload
            }
        case "SET_PLAYING":
            return{
               ...state,
                playing: !state.playing
            }
        default:
            return state;
    }
}