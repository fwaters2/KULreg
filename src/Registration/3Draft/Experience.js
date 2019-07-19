import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

export default function Experience(props) {
  return (
    <React.Fragment>
      <Typography variant="h4">How much Ultimate have you played?</Typography>

      <Grid container direction="column">
      <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          Newbie
        </Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          In the middle
        </Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          Veteran
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
