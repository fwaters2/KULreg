import React from "react";
import { Grid, Typography } from "@material-ui/core";
import MultipleChoice from "../MultipleChoice.js";

export default function Experience(props) {
  const { language, classes , values, handleButtonClick } = props;
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item container justify='center' xs={6}>
          <Typography variant='h6'>{language.english}</Typography>
          <MultipleChoice language={language} handleButtonClick={handleButtonClick} values={values} classes={classes} category={"English"} />
        </Grid>
        <Grid item container justify='center' xs={6}>
        <Typography variant='h6'>{language.chinese}</Typography>
          <MultipleChoice language= {language} handleButtonClick={handleButtonClick} values={values} classes={classes} category={"Chinese"} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
