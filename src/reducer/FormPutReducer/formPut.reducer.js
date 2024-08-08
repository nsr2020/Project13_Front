export const INITIAL_STATE_FORM_PUT = {
    isButtonDisabledPut: true,
    isLoadingPut: false,
    formValues: {
        name: "",
        image: "",
        category: "",
        trailer: "",
        stars: "",
        platform: ""
    }
};

export const FormPutReducer = (state = INITIAL_STATE_FORM_PUT, action) => {
    switch (action.type) {
        case "IS_LOADING_PUT":
            return {
                ...state,
                isLoadingPut: action.payload,
            };
        case "IS_BUTTON_DISABLED_PUT":
            return {
                ...state,
                isButtonDisabledPut: action.payload,
            };
        case "UPDATE_FORM_VALUES":
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
