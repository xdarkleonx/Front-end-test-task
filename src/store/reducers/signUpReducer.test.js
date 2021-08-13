import { render, screen } from '@testing-library/react';
import App from '../../../src/App';
import signUpReducer from './signUpReducer';
import { setStep, setFirstFormData, setSecondFormData } from '../actions/signUpActions';

const initState = {
  step: 1,
}

it('set step number to 2', () => {
  const action = setStep(2);
  const newState = signUpReducer(initState, action);
  expect(newState.step).toBe(2);
})

it('set first form data', () => {
  const data = {
    email: 'example@mail.ru',
    password: '123456'
  }

  const action = setFirstFormData(data);
  const newState = signUpReducer(initState, action);
  expect(newState.firstFormData).toBe(data);
})

it('set second form data', () => {
  const data = {
    dateOfBirth: 721432800000,
    gender: 'male',
    howHearAboutUs: 'from friends'
  }

  const action = setSecondFormData(data);
  const newState = signUpReducer(initState, action);
  expect(newState.secondFormData).toStrictEqual(data);
})

it('render SignUp with title Signup', () => {
  render(<App />);
  const action = setStep(2);
  const newState = signUpReducer(initState, action);
  const title = screen.getByText(/Signup/i);
  // expect(title).toBeInTheDocument();
  expect(newState.step).toBe(2);
  expect(title).toBeInTheDocument();
});