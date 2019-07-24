import React from "react";
import {
  Slider,
  Grid,
  Typography
} from "@material-ui/core";

export default function Height(props) {
  const { language, classes, values, handleSliderChange } = props;

  function unitConverter(cm) {
    let alltheinches = Math.floor(cm / 2.54);
    let inches = alltheinches % 12;
    let feet = Math.floor(alltheinches / 12);
    return feet + "ft " + inches + "in";
  }

  return (
    <React.Fragment>
      <Grid container alignItems="center">
        <Grid item xs={8} container justify="center">
          {values.height === null ? (
            <Typography variant="h6">{language.tall}</Typography>
          ) : (
            <Typography variant="h3">{values.height}{language.cm}</Typography>
          )}
        </Grid>
        <Grid item xs={4} className={classes.vertSlider}>
          <Slider
            defaultValue={170}
            value={values.height}
            onChange={handleSliderChange("height")}
            aria-labelledby="input-slider"
            orientation="vertical"
            min={140}
            max={220}
            valueLabelDisplay="on"
            valueLabelFormat={unitConverter}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
