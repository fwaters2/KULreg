import React from "react";
import "./InitialState.json";
import firebase from "../Firebase";
import FormContainer from "./FormContainer";
import { Button } from "@material-ui/core";

const InitialState = require("./InitialState.json");

export default function StateStore() {
  const [step, stepChange] = React.useState(0);
  const [lang, toggleLang] = React.useState("en");
  const [chinese, toggleChinese] = React.useState(false);
  const [values, setValues] = React.useState(InitialState);
  const [isSignedIn, updateUser] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //var displayName = user.displayName;
        var email = user.email;
        //var emailVerified = user.emailVerified;
        //var photoURL = user.photoURL;
        updateUser(true);
        setValues({ ...InitialState, email: email });

        //Get the data stored for this user
        firebase
          .firestore()
          .collection("Registration")
          .where("email", "==", email)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              setValues(doc.data());
              
            firebase.firestore().collection("Registration").doc(doc.id).update({"docId":doc.id})
            });
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });

        //changeStep(1)
        // ...
        //Send user auth email
        //firebase.auth().sendSignInLinkToEmail(email,actionCodeSettings)
      } else {
        // User is signed out.
        // ...
        //changeStep(0)
        updateUser(false);
        console.log("not signed in");
      }
    });

    return () => unsubscribe;
  }, []);

  const toggleLanguage = () => {
    lang === "en" ? toggleLang("ch") : toggleLang("en");
    toggleChinese(!chinese);
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  console.log(values)
  };
  const handleButtonClick = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const handleComplexChange = (name, value) => () => {
    console.log("handle complex fired");
    setValues({ ...values, [name]: value });
  };
  const handleSliderChange = name => (e, value) => {
    setValues({ ...values, [name]: value });
  };
  const changeStep = () => {
    stepChange(step + 1);
  };
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <React.Fragment>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <FormContainer
        toggleLanguage={toggleLanguage}
        handleChange={handleChange}
        handleButtonClick={handleButtonClick}
        handleComplexChange={handleComplexChange}
        handleSliderChange={handleSliderChange}
        changeStep={changeStep}
        values={values}
        lang={lang}
        step={step}
        stepChange={stepChange}
        chinese={chinese}
        isSignedIn={isSignedIn}
        setValues={setValues}
      />
    </React.Fragment>
  );
}
