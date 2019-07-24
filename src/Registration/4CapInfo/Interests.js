import React from "react";
import { Grid, Typography } from "@material-ui/core";
import MultipleChoice from "../MultipleChoice.js";

export default function Interests(props) {
  const { language, classes, values, handleButtonClick } = props;
  return (
    <React.Fragment>
      <Grid container spacing={1}>
      <Grid item container justify='center' xs={6}>
          <Typography variant='h6'>{language.party}</Typography>
          <MultipleChoice language={language} values={values} handleButtonClick={handleButtonClick} classes={classes} category={"Party"} />
        </Grid>
        <Grid item container justify='center' xs={6}>
          <Typography variant='h6'>{language.improve}</Typography>
          <MultipleChoice language={language} values={values} handleButtonClick={handleButtonClick} classes={classes} category={"Improve"} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
