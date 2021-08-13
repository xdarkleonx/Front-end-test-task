import React from 'react';
import { Box, Button, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BsArrowRightShort } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const ThirdStepForm = (props) => {
  const classes = useStyles();

  const firstFormData = useSelector((state) => state.signUp.firstFormData);
  const secondFormData = useSelector((state) => state.signUp.secondFormData);

  const getUserData = () => {
    const userData = JSON.stringify({
      userData: {
        ...firstFormData,
        ...secondFormData
      }
    })

    props.onClick(userData);
  }

  return (
    <Fade direction='left' in={true}>
      <Box className={classes.base}>
        <HiCheckCircle size={160} color='#b8e986' />
        <Button
          type='submit'
          variant='outlined'
          color='primary'
          className={classes.dashboardButton}
          endIcon={<BsArrowRightShort size={22} />}
          onClick={getUserData}
        >
          Go to Dashboard
        </Button>
      </Box>
    </Fade>
  )
}

export default ThirdStepForm;

const useStyles = makeStyles(() => ({
  base: {
    flex: 1,
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    borderTop: '1px solid #d1d1d1',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  },
}))