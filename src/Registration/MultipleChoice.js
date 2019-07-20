import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import "../Choices.json";
const data = require("../Choices.json");

export default function MultipleChoice(props) {
  const { classes, category } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        {category}
      </Typography>
      <form className={classes.form}>
        <Grid container direction="column">
          {data[category].options.map(option=>(
            <Grid item key={option}>
            <Button fullWidth variant="outlined" className={props.classes.button}>
              {option}
            </Button>
          </Grid>
          ))}
        </Grid>
      </form>
    </React.Fragment>
  );
}