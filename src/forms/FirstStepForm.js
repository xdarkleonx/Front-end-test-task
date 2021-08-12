import React, { useMemo } from 'react';
import { Box, Button, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BsArrowRightShort } from 'react-icons/bs';
import FormTextField from '../components/FormTextField';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { requiredAndNotEmpty, emailValidate, minLengthSix, matchPassword } from '../utils/validators';

let FirstStepForm = (props) => {
  const classes = useStyles();

  const checkPassword = useMemo(() => {
    return matchPassword(props.password)
  }, [props.password])

  return (
    <Grow direction='left' in={true}>
      <form
        style={styles.form}
        onSubmit={props.handleSubmit}
      >
        <Box className={classes.base}>
          <Field
            name='email'
            label='EMAIL'
            component={FormTextField}
            validate={[requiredAndNotEmpty, emailValidate]}
          />
          <Field
            name='password'
            label='PASSWORD'
            type='password'
            component={FormTextField}
            validate={[requiredAndNotEmpty, minLengthSix]}
          />
          <Field
            name='confirmPassword'
            label='CONFIRM PASSWORD'
            type='password'
            component={FormTextField}
            validate={[requiredAndNotEmpty, checkPassword]}
          />
        </Box>
        <Box className={classes.footer}>
          <Button
            type='submit'
            color='primary'
            endIcon={<BsArrowRightShort size={22} />}
          >
            Next
          </Button>
        </Box>
      </form>
    </Grow>
  )
}

FirstStepForm = reduxForm({ form: 'firstStep' })(FirstStepForm);

const selector = formValueSelector('firstStep');

FirstStepForm = connect(state => ({
  password: selector(state, 'password')
}))(FirstStepForm)

export default FirstStepForm;

const useStyles = makeStyles(() => ({
  base: {
    marginInline: 40,
    marginBlock: 64,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  footer: {
    borderTop: '1px solid #d1d1d1',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  },
}))

const styles = {
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}