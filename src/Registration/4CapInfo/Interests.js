import React from "react";
import { Typography, Grid } from "@material-ui/core";
import "../../Choices.json";
import MultipleChoice from "../MultipleChoice.js";

export default function Interests(props) {
  const { classes, values, handleButtonClick } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Interests
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <MultipleChoice values={values} handleButtonClick={handleButtonClick} classes={classes} category={"Party"} />
        </Grid>
        <Grid item xs={6}>
          <MultipleChoice values={values} handleButtonClick={handleButtonClick} classes={classes} category={"Improve"} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
