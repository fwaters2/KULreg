import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import firebase from "../../Firebase";

export default function Result(props) {
  const { onClose, open, values, handleChange, setValues } = props;

const submitNumbers = () =>{
  setValues({
    ...values,areDigitsSubmitted:true
  })
}

  function handleClose() {
    onClose();
  }
  const handleSubmit = () => {
   submitNumbers()
    firebase
      .firestore()
      .collection("Registration")
      .doc(values.docId)
      .update({
        fourDigits: values.fourDigits,
        areDigitsSubmitted: true
      });
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" align="center">
        Registered!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to the Fall '19 Season {values.firstName}!
        </DialogContentText>
        <DialogContentText>
          Bank info匯款資訊: <br />
          Bank code銀行代號: 005 <br />
          Account Number帳號: 094005419233 Amount: {values.subtotal}
        </DialogContentText>

        {values.areDigitsSubmitted ? (
          <DialogContentText>
            PENDING
            <Button onClick={() => console.log(values)}>Check Console</Button>
          </DialogContentText>
        ) : (
          <div>
            <DialogContentText>Confirm your transfer:</DialogContentText>

            <TextField
              label="Last 4 Digits"
              type="number"
              value={values.fourDigits}
              onChange={handleChange("fourDigits")}
            />
            <DialogActions>
              <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
