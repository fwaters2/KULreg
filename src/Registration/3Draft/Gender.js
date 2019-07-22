import React from "react";
import { Button, Grid } from "@material-ui/core";

export default function Gender(props) {
  const { classes, values, handleComplexChange } = props;
  return (
    <React.Fragment>
      
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              variant={values.gender === "female" ? "outlined" : "contained"}
              color="secondary"
              className={classes.picButton}
              fullWidth
              onClick={handleComplexChange("gender", "female")}
            >
              <i className="fas fa-venus fa-5x" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={values.gender === "male" ? "outlined" : "contained"}
              color="primary"
              className={classes.picButton}
              fullWidth
              onClick={handleComplexChange("gender", "male")}
            >
              <i className="fas fa-mars fa-5x" />
            </Button>
          </Grid>
        </Grid>
      
    </React.Fragment>
  );
}
