import { createContext, useReducer } from "react";
import {
	INITIAL_STATE_MOVIES,
	moviesReducer,
} from "../reducer/MoviesReducer/movies.reducer";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE_MOVIES);

	return <MoviesContext.Provider value={{state, dispatch}}>
        {children}
        </MoviesContext.Provider>;
};

export default MoviesProvider;
