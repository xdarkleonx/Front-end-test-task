export const setStep = (stepNumber) => ({
  type: 'SET_STEP',
  payload: stepNumber,
})

export const setFirstFormData = (data) => ({
  type: 'SET_FIRST_FORM_DATA',
  payload: data,
})

export const setSecondFormData = (data) => ({
  type: 'SET_SECOND_FORM_DATA',
  payload: data,
})