import React from "react";
import {
  Slider,
  Grid,
  Input,
  InputAdornment,
  Typography,
  FormControlLabel,
  InputLabel
} from "@material-ui/core";

export default function Height(props) {
  const { classes, values, handleSliderChange } = props;

  const [value, setValue] = React.useState(170);

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  function unitConverter(cm) {
    let alltheinches = Math.floor(cm / 2.54);
    let inches = alltheinches % 12;
    let feet = Math.floor(alltheinches / 12);
    return feet + "ft " + inches + "in";
  }

  const handleBlur = () => {
    if (value < 140) {
      setValue(140);
    } else if (value > 220) {
      setValue(220);
    }
  };
  return (
    <React.Fragment>
      <Grid container alignItems="center">
        <Grid item xs={8} container justify="center">
          {values.height === null ? (
            <Typography variant="h6">How tall are you?</Typography>
          ) : (
            <Typography variant="h3">{values.height}cm</Typography>
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
