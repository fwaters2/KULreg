import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

export default function Athl(props) {
  return (
    <React.Fragment>
      <Typography variant="h4">How Athletic are you?</Typography>

      <Grid container direction="column">
      <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          I expect to guard the slowest person on the other team
        </Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          In the middle
        </Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" className={props.classes.button}>
          Pretty Quick! Not many can keep up with me.
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
