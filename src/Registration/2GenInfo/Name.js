import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function Name() {
  const classes = useStyles();

  //const handleChange = name => event => {
  //  setValues({ ...values, [name]: event.target.value });
  //};

  return (
    <React.Fragment>
      <Typography variant="h4">Names</Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard-required"
              label="First Name"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard-required"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-required"
              label="Chinese Name"
              className={classes.textField}
              margin="normal"
              helperText="Optional"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-required"
              label="English Nickname"
              className="normal"
              helperText="Optional"
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
