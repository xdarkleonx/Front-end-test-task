const initState = {
  step: 1,
}

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_STEP':
      console.log(action);
      return {
        ...state,
        step: action.payload
      };
    case 'SET_DATA':
      console.log(action);
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };

    default:
      return state;
  }
}

export default signUpReducer;