export const INITIAL_STATE_MOVIES = {
	indexAction: 0,
	indexComedy: 0,
	indexHorror: 0,
	indexKids: 0,
	moviesAction: [],
	moviesComedy: [],
	moviesHorror: [],
	moviesKids: [],
};

export const moviesReducer = (state = INITIAL_STATE_MOVIES, action) => {
	switch (action.type) {
		case "INDEX_ACTION":
			return {
				...state,
				indexAction: action.payload,
			};
		case "INDEX_COMEDY":
			return {
				...state,
				indexComedy: action.payload,
			};
		case "INDEX_HORROR":
			return {
				...state,
				indexHorror: action.payload,
			};

		case "INDEX_KIDS":
			return {
				...state,
				indexKids: action.payload,
			};
		case "MOVIES_ACTION":
			return {
				...state,
				moviesAction: [...action.payload],
			};
		case "MOVIES_COMEDY":
			return {
				...state,
				moviesComedy: [...action.payload],
			};
		case "MOVIES_HORROR":
			return {
				...state,
				moviesHorror:[...action.payload],
			};
		case "MOVIES_KIDS":
			return {
				...state,
				moviesKids: [...action.payload],
			};
		default:
			return state;
	}
};
