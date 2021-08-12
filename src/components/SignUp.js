import React from 'react';
import { Grid, Container, Box, Typography, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FirstStepForm from '../forms/FirstStepForm';
import SecondStepForm from '../forms/SecondStepForm';
import ThirdStepForm from '../forms/ThirdStepForm';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setStep } from '../store/actions/signUpActions';

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.signUp.data);
  const step = useSelector((state) => state.signUp.step);

  const onSubmitForm = (data, stepNumber) => {
    dispatch(setStep(stepNumber));

    if (stepNumber === 2) {
      const { confirmPassword, ...newData } = data;
      dispatch(setData(newData));
    }
    else if (stepNumber === 3) {
      let { day, month, year, ...newData } = data;
      const dayBirth = parseInt(data.day);
      const monthBirth = parseInt(data.month - 1);
      const yearBirth = parseInt(data.year);
      newData.dateOfBirth = new Date(yearBirth, monthBirth, dayBirth).getTime();
      newData.howHearAboutUs = data.howHearAboutUs || null;
      dispatch(setData(newData));
    }
  }

  return (
    <Container maxWidth='xs'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        className={classes.baseGrid}
      >
        <Box className={classes.baseBox}>
          <Typography className={classes.title}>
            {step < 3 ? 'Signup' : 'Thank you'}
          </Typography>
          <LinearProgress
            className={classes.progress}
            variant='determinate'
            value={33.33 * step}
          />
          {step === 1 &&
            <FirstStepForm onSubmit={(data) => onSubmitForm(data, 2)} />
          }
          {step === 2 &&
            <SecondStepForm onSubmit={(data) => onSubmitForm(data, 3)} />
          }
          {step === 3 &&
            <ThirdStepForm onClick={() => console.log(JSON.stringify({ userData: data }))} />
          }
        </Box>
      </Grid>
    </Container>
  )
}

export default SignUp;

const useStyles = makeStyles(() => ({
  baseGrid: {
    minHeight: '100vh',
  },
  baseBox: {
    display: 'flex',
    flexDirection: 'column',
    width: 396,
    minHeight: 542,
    border: '1px solid #d1d1d1',
    borderRadius: 10,
  },
  title: {
    color: '#239efc',
    textAlign: 'center',
    padding: 20
  },
  progress: {
    height: 8,
    background: 'white',
    borderTop: '1px solid #d1d1d1',
    borderBottom: '1px solid #d1d1d1',
  },
  dashboardButton: {
    marginTop: 20
  }
}))