const initState = {
  step: 1,
  secondFormData: {
    howHearAboutUs: null,
  }
}

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_STEP':
      console.log(action);
      return {
        ...state,
        step: action.payload
      };
    case 'SET_FIRST_FORM_DATA':
      console.log(action);
      return {
        ...state,
        firstFormData: action.payload
      };
    case 'SET_SECOND_FORM_DATA':
      console.log(action);
      return {
        ...state,
        secondFormData: {
          ...state.secondFormData,
          ...action.payload
        }
      };

    default:
      return state;
  }
}

export default signUpReducer;