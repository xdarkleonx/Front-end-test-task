import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const FormTextField = (props) => {
  const { input, meta } = props;

  const classes = useStyles();

  const error = meta.touched && meta.invalid
    ? meta.error
    : '';

  console.log(props);
  return (
    <TextField
      type={props.type}
      label={`${props.label} ${error}`}
      placeholder={props.placeholder}
      InputLabelProps={{ shrink: true }}
      className={classes.textField}
      error={meta.touched && meta.invalid}
      value={input.value}
      onChange={input.onChange}
    />
  )
}

export default FormTextField;


const useStyles = makeStyles(() => ({
  textField: {
    marginTop: 10,
    width: '100%',
    '& .MuiInput-underline:before': {
      borderBottomColor: '#e0e0e0',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#d6d6d6',
    },
    '& .MuiInputBase-input': {
      paddingLeft: 5,
      color: '#474d5b',
      fontWeight: 500,
    },
  },
}))