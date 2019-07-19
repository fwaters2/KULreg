import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid } from "@material-ui/core";

export default function Name(props) {
  const { classes } = props;

  //const handleChange = name => event => {
  //  setValues({ ...values, [name]: event.target.value });
  //};

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Names
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              autoComplete="fname"
              id="standard-required"
              label="First Name"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
              variant="outlined"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              autoComplete="lname"
              id="standard-required"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              helperText="Required*"
            />
          </Grid>
        </Grid>
        <TextField
          id="standard-required"
          label="Chinese Name"
          fullWidth
          margin="normal"
          variant="outlined"
          helperText="Optional"
        />
        <TextField
          id="standard-required"
          label="English Nickname"
          fullWidth
          margin="normal"
          variant="outlined"
          helperText="Optional"
        />
      </form>
    </React.Fragment>
  );
}
