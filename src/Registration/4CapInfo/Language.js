import React from "react";
import { Typography, Grid } from "@material-ui/core";
import "../../Choices.json";
import MultipleChoice from "../MultipleChoice.js";

export default function Experience(props) {
  const { classes , values, handleButtonClick } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Languages
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <MultipleChoice handleButtonClick={handleButtonClick} values={values} classes={classes} category={"English"} />
        </Grid>
        <Grid item xs={6}>
          <MultipleChoice handleButtonClick={handleButtonClick} values={values} classes={classes} category={"Chinese"} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
