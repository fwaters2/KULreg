import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

export default function Experience(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Experience
      </Typography>
      <form className={classes.form}>
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
      </form>
    </React.Fragment>
  );
}
