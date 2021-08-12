import { combineReducers } from 'redux';
import signUp from './reducers/signUpReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  signUp: signUp,
  form: formReducer
});