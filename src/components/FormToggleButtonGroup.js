import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';

const FormToggleButtonGroup = (props) => {
  const { input, meta, children } = props;

  const classes = useStyles();

  const className = meta.touched && meta.invalid
    ? props.errorStyle
    : classes.toggleButtonsGroup;

  const error = meta.touched && meta.invalid
    ? meta.error
    : ''

  return (
    <>
      <ToggleButtonGroup
        exclusive
        className={className}
        value={input.value}
        onChange={(_, newValue) => input.onChange(newValue)}
      >
        {children}
      </ToggleButtonGroup>
      <Typography style={styles.errorText}>
        {error}
      </Typography>
    </>
  )
}

export default FormToggleButtonGroup;


const useStyles = makeStyles(() => ({
  toggleButtonsGroup: {
    '&.MuiToggleButtonGroup-root': {
      display: 'flex'
    }
  },
}))

const styles = {
  errorText: {
    color: 'red',
    fontSize: 12.5,
    padding: 2,
    marginLeft: 15
  }
}