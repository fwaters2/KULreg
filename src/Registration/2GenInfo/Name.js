import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid } from "@material-ui/core";

export default function Name(props) {
  const { classes, handleChange, values } = props;

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
          <Grid item xs={6}>
            <TextField
              required
              autoComplete="fname"
              id="standard-required"
              label="First Name"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
              variant="outlined"
              value={values.firstName}
              autoFocus
              fullWidth
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              autoComplete="lname"
              id="standard-required"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              helperText="Required*"
              fullWidth
              value={values.lastName}
              onChange={handleChange("lastName")}
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
          values={values.chName}
          onChange={handleChange("chName")}
        />
        <TextField
          id="standard-required"
          label="English Nickname"
          fullWidth
          margin="normal"
          variant="outlined"
          helperText="Optional"
          values={values.nickName}
          onChange={handleChange("nickName")}
        />
      </form>
    </React.Fragment>
  );
}
