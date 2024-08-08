export const INITIAL_STATE_FORM_POST = {
	isButtonDisabledPost: true,
	isLoadingPost: false,
};

export const FormPostReducer = (state = INITIAL_STATE_FORM_POST, action) => {
	switch (action.type) {
		case "IS_LOADING_POST":
			return {
				...state,
				isLoadingPost: action.payload,
			};
		case "IS_BUTTON_DISABLED_POST":
			return {
				...state,
				isButtonDisabledPost: action.payload,
			};

		default:
			return state;
	}
};
