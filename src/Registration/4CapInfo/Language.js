import React from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";

export default function Experience(props) {
  function Options() {
      return(
    <React.Fragment>
      <Grid item xs={4}>
        <Button variant="outlined" className={props.classes.button}>
          0 Ability
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" className={props.classes.button}>
          In the middle
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" className={props.classes.button}>
          Native
        </Button>
      </Grid>
    </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Typography variant="h4">Language Abilities</Typography>
      <Grid container>
        <Grid container item xs={4} spacing={3} direction="column">
          <Options />
        </Grid>
        <Grid container item xs={4} spacing={3} direction="column">
          <Options />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
