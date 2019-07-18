import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export default class Form00Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        
        <TextField
          id="outlined-name"
          label="Email"
          //className={classes.textField}
          //value={values.name}
          //onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Password"
          type="password"
          //className={classes.textField}
          //value={values.name}
          //onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Confirm Password"
          type="password"
          //className={classes.textField}
          //value={values.name}
          //onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        /><br/><br/>
        <Button variant="contained" color="primary" 
        //className={classes.button}
        >
          Let's get Registered!
        </Button>
      </div>
    );
  }
}
