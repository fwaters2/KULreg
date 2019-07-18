import React from "react";
import { Button, Typography } from "@material-ui/core";

export default function Gender(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Gender
      </Typography>
      <Button variant="contained" color="secondary" className={classes.button}>
        <i className="fas fa-venus" />
      </Button>
      <Button variant="contained" color="primary" callName={classes.button}>
        <i className="fas fa-mars" />
      </Button>
    </React.Fragment>
  );
}
