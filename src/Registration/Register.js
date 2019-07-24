import React from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import firebase from "../Firebase";

export default function Register(props) {
  const { language, changeStep, handleChange, values } = props;
  const handleRegistration = e => {
    e.preventDefault();
    //firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    // ...
    // });
    changeStep();
    console.log("working" + values.email + values.password);
  };
  function checkSignIn() {
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: "https://registration-db4ab.firebaseapp.com/__/auth/action",
      // This must be true.
      handleCodeInApp: true
      //dynamicLinkDomain: ''
    };
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email + displayName + emailVerified);
        // ...
        //Send user auth email
        //firebase.auth().sendSignInLinkToEmail(email,actionCodeSettings)
      } else {
        // User is signed out.
        // ...
        console.log("not signed in");
      }
    });
  }
  return (
    <React.Fragment>
      {checkSignIn()}
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
