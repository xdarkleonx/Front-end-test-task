import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, Grow } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { BsArrowRightShort } from 'react-icons/bs';
import FormToggleButtonGroup from '../components/FormToggleButtonGroup';
import FormOutlineTextField from '../components/FormOutlineTextField';
import { useDispatch } from 'react-redux';
import { setStep, setData } from '../store/actions/signUpActions';
import { requiredAndNotEmpty, numberType, dayOfBirth, monthOfBirth, yearOfBirth } from '../utils/validators';

let SecondStepForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const checkDay = useMemo(() => {
    const month = parseInt(props.month);
    const year = parseInt(props.year);
    return dayOfBirth(month, year);
  }, [props.month, props.year])

  const onBackClick = () => {
    dispatch(setStep(1));
    dispatch(setData());
  }

  return (
    <Grow direction='left' in={true}>
      <form
        style={styles.form}
        onSubmit={props.handleSubmit}
      >
        <Box className={classes.base}>
          <Typography className={classes.inputTitle}>
            DATE OF BIRTH
          </Typography>
          <Box className={classes.birthdayBox}>
            <Field
              name='day'
              placeholder='DD'
              maxLength={2}
              padding={10}
              textAlign='center'
              component={FormOutlineTextField}
              validate={[requiredAndNotEmpty, numberType, checkDay]}
            />
            <Field
              name='month'
              placeholder='MM'
              maxLength={2}
              padding={10}
              textAlign='center'
              component={FormOutlineTextField}
              validate={[requiredAndNotEmpty, numberType, monthOfBirth]}
            />
            <Field
              name='year'
              placeholder='MMMM'
              textAlign='center'
              maxLength={4}
              padding={10}
              component={FormOutlineTextField}
              validate={[requiredAndNotEmpty, numberType, yearOfBirth]}
            />
          </Box>
          <Box mt={5}>
            <Typography className={classes.inputTitle}>
              GENDER
            </Typography>
            <Field
              name='gender'
              value='male'
              errorStyle={classes.errorToggleButton}
              component={FormToggleButtonGroup}
              validate={requiredAndNotEmpty}
            >
              <ToggleButton
                value='male'
                className={classes.toggleButton}
              >
                MALE
              </ToggleButton>
              <ToggleButton
                value='female'
                className={classes.toggleButton}
              >
                FEMALE
              </ToggleButton>
              <ToggleButton
                value='unspecified'
                className={classes.toggleButton}
              >
                UNSPECIFIED
              </ToggleButton>
            </Field>
          </Box>
          <Box mt={5}>
            <Typography className={classes.inputTitle}>
              WHERE DID YOU HERE ABOUT US?
            </Typography>
            <Field
              name='howHearAboutUs'
              fullWidth
              multiline
              maxRows={5}
              component={FormOutlineTextField}
            />
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Button
            className={classes.backButton}
            onClick={() => onBackClick()}
          >
            Back
          </Button>
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

SecondStepForm = reduxForm({ form: 'secondStep' })(SecondStepForm);

const selector = formValueSelector('secondStep');

SecondStepForm = connect(state => ({
  month: selector(state, 'month'),
  year: selector(state, 'year')
}))(SecondStepForm)

export default SecondStepForm;

const useStyles = makeStyles(() => ({
  base: {
    marginInline: 40,
    marginBlock: 64,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  backButton: {
    color: 'gray'
  },
  footer: {
    borderTop: '1px solid #d1d1d1',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10
  },
  inputTitle: {
    marginBottom: 10,
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.73rem',
    textAlign: 'center'
  },
  birthdayBox: {
    display: 'flex',
  },
  errorToggleButton: {
    '&.MuiToggleButtonGroup-root': {
      display: 'flex',
      margin: 0,
      borderRadius: 0,
      border: '1px solid red',
    }
  },
  toggleButton: {
    width: '34%',
    height: 40,
    borderRadius: 0,
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: '#207bf5',
    },
    '&.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1069e0'
    }
  },
}))

const styles = {
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}