import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../../Choices.json";
import MultipleChoice from "../MultipleChoice.js";

export default function Experience(props) {
  const { classes , values, handleButtonClick } = props;
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item container justify='center' xs={6}>
          <Typography variant='h6'>English</Typography>
          <MultipleChoice handleButtonClick={handleButtonClick} values={values} classes={classes} category={"English"} />
        </Grid>
        <Grid item container justify='center' xs={6}>
        <Typography variant='h6'>Chinese</Typography>
          <MultipleChoice handleButtonClick={handleButtonClick} values={values} classes={classes} category={"Chinese"} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
