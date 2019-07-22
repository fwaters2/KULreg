import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

export default function Name(props) {
  const { handleChange, values } = props;

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            autoComplete="fname"
            id="standard-required"
            label="First Name"
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
        
        value={values.chName}
        onChange={handleChange("chName")}
      />
      <TextField
        id="standard-required"
        label="English Nickname"
        fullWidth
        margin="normal"
        variant="outlined"
      
        value={values.nickName}
        onChange={handleChange("nickName")}
      />
    </React.Fragment>
  );
}
