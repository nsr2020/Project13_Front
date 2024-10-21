export const INITIAL_STATE_SP = {
  isFormsArea: false,
  form: true,
  isLoadingLogin: false,
  isButtonDisabledLogin: true,
  isButtonDisabledRegister: true,
  isLoadingRegister: false,
};

export const StartPageReducer = (state = INITIAL_STATE_SP, action) => {
  switch (action.type) {
    case 'IS_FORMS_AREA':
      return {
        ...state,
        isFormsArea: !state.isFormsArea,
      };

    case 'IS_LOGIN_FORM':
      return {
        ...state,
        form: !state.form,
      };
    case 'IS_LOGIN_BUTTON':
      return {
        ...state,
        isButtonDisabledLogin: action.payload,
      };

    case 'IS_LOADING_LOGIN':
      return {
        ...state,
        isLoadingLogin: action.payload,
      };
    case 'IS_LOADING_REGISTER':
      return {
        ...state,
        isLoadingRegister: action.payload,
      };
    case 'IS_REGISTER_BUTTON':
      return {
        ...state,
        isButtonDisabledRegister: action.payload,
      };
    default:
      return state;
  }
};
