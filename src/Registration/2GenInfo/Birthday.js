import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

export default function Birthday(props) {
  const {classes, handleChange, values} = props

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
        value={values.birthday}
        className={classes.textField}
        onChange={handleChange("birthday")}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
    </form>
    </React.Fragment>
  );
}