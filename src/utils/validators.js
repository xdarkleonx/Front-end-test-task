import { isEmailValidate, getDaysInMonth } from './functions';

export const requiredAndNotEmpty = (value) => {
  if (!value || value === '') {
    return 'IS REQUIRED';
  }
  return undefined;
}

export const emailValidate = (email) => {
  if (!isEmailValidate(email)) {
    return 'IS NOT VALID';
  }
  return undefined;
}

export const minLengthSix = (value) => {
  if (value.length < 6) {
    return 'SHOULD BE MIN 6 CHARS';
  }
  return undefined;
}

export const matchPassword = (password) => (value) => {
  if (password.localeCompare(value) !== 0) {
    return 'NOT MATCH';
  }
  return undefined;
}

export const numberType = (value) => {
  const day = parseInt(value);

  if (isNaN(day)) {
    return 'SHOULD BE A NUMBER';
  }
}

export const dayOfBirth = (month, year) => (value) => {
  if (month && year) {
    const days = getDaysInMonth(month - 1, year);

    if (value < 1 || value > days) {
      return 'WRONG DAY';
    }
  }
  return undefined;
}

export const monthOfBirth = (value) => {
  if (value < 1 || value > 12) {
    return 'WRONG DAY';
  }
  return undefined;
}

export const yearOfBirth = (value) => {
  const year = new Date().getFullYear();
  const age = year - value;
  if (age < 18) {
    return 'ONLY 18+';
  }
  else if (value < 1800) {
    return 'WRONG YEAR';
  }
  return undefined;
}