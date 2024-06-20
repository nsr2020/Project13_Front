export const INITIAL_STATE_TRAILER = {
    trailer: null,
    playing: false,
    gif:[]
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
            case"SET_GIF":
            return{
               ...state,
                gif: action.payload
            }
        default:
            return state;
    }
}