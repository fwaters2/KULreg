import React from "react";
import { Typography, Button, Grid} from "@material-ui/core";

export default function Experience(props) {
  const {classes} =props
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
      <Typography component="h1" variant="h5">Languages</Typography>
      <form className={classes.form}>
      <Grid container>
        <Grid container item xs={4} spacing={3} direction="column">
          <Options />
        </Grid>
        <Grid container item xs={4} spacing={3} direction="column">
          <Options />
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
}
