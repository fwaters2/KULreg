import React from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import firebase from "../Firebase";

export default function Register(props) {
  const { language, handleChange, values } = props;

  const handleRegistration = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(function(error) {
      firebase.auth().signInWithEmailAndPassword(values.email,values.password).catch(function(error){
        //var errorCode = error.code;
        let errorMessage = error.message;
        // ...
        alert(errorMessage)
      })
    // Handle Errors here.
    let errorMessage = error.message;
    alert(errorMessage)
     });
    //changeStep();
  };
 
  return (
    <React.Fragment>
      
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label={language.email}
        name="email"
        autoComplete="email"
        value={values.email}
        onChange={handleChange("email")}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label={language.password}
        type="password"
        id="password"
        value={values.password}
        onChange={handleChange("password")}
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={language.rememberMe}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRegistration}
      >
        {language.signIn}
      </Button>
    </React.Fragment>
  );
}
