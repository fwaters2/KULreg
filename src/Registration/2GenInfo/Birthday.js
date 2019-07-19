import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

export default function Birthday(props) {
  const {classes} = props

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Birthday
      </Typography>
    
    <form className={classes.form} noValidate>
      <TextField
      autoFocus
        id="date"
        label="Birthday"
        type="date"
        defaultValue="1990-06-06"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
    </form>
    </React.Fragment>
  );
}