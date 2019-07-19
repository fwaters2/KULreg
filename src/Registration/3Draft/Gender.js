import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";

export default function Gender(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Gender
      </Typography>
      <form className={classes.form}>
        <Grid container  spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.picButton}
              fullWidth
            >
              <i className="fas fa-venus fa-5x" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.picButton}
              fullWidth
            >
              <i className="fas fa-mars fa-5x"/>
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
