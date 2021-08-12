import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const FormOutlineTextField = (props) => {
  const { input, meta } = props;

  const classes = useStyles();

  const error = meta.touched && meta.invalid
    ? meta.error
    : '';

  return (
    <TextField
      variant='outlined'
      fullWidth={props.fullWidth}
      multiline={props.multiline}
      maxRows={props.maxRows}
      placeholder={props.placeholder}
      helperText={error}
      error={meta.touched && meta.invalid}
      value={input.value}
      onChange={input.onChange}
      inputProps={{
        maxLength: props.maxLength || 300,
        style: {
          textAlign: props.textAlign,
          padding: props.padding || 'auto'
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
    />
  )
}

export default FormOutlineTextField;


const useStyles = makeStyles(() => ({
  cssFocused: {},
  notchedOutline: {},
  cssOutlinedInput: {
    minHeight: 40,
    textAlign: 'center',
    borderRadius: 0,
    '&:hover $notchedOutline': {
      borderColor: '#adadad'
    },
    '&$cssFocused $notchedOutline': {
      borderColor: '#448cff',
    },
  },
}))