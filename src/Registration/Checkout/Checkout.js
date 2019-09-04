import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import "../KUL.svg";

import firebase from "../../Firebase";
const logo = require("../KUL.svg");

export default function Checkout(props) {
  const { language, classes, values, setValues } = props;

  const registerPlayer = () =>{
    setValues({...values,isRegistered:true})
    
  }
  const handleSubmission = () => {
    registerPlayer()
    firebase
      .firestore()
      .collection("Registration")
      .add({...values,isRegistered:true});
  };
  return (
    <React.Fragment>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={<img src={logo} alt="logo" height="20px" />}
            secondary={"Early Bird Registration"}
          />
          <Typography variant="body2">1200nt</Typography>
        </ListItem>
        {values.discBlack ? (
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Photo"} secondary={"Black Disc"} />
            <Typography variant="body2">400nt</Typography>
          </ListItem>
        ) : null}
        {values.discWhite ? (
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Photo"} secondary={"White Disc"} />
            <Typography variant="body2">400nt</Typography>
          </ListItem>
        ) : null}
        {values.hatBlack ? (
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Photo"} secondary={"Black Hat"} />
            <Typography variant="body2">200nt</Typography>
          </ListItem>
        ) : null}
        {values.hatWhite ? (
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Photo"} secondary={"White Hat"} />
            <Typography variant="body2">200nt</Typography>
          </ListItem>
        ) : null}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {values.subtotal + "nt"}
          </Typography>
        </ListItem>
      </List>
      <Button
        onClick={handleSubmission}
        variant="contained"
        color="primary"
        fullWidth
      >
        {language.submitFinish}
      </Button>
    </React.Fragment>
  );
}
