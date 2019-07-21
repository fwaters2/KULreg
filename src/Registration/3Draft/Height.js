import React from "react";
import {
  Slider,
  Typography,
  Grid,
  Input,
  InputAdornment
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
      <Typography component="h1" variant="h5">
        Height
      </Typography>
      <form className={classes.form}>
        <Grid container alignItems='center'>
          <Grid item xs={7}>
            <Input
              className={classes.input}
              value={values.height}
              fullWidth
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              inputProps={{
                step: 1,
                min: 140,
                max: 220,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
          <Grid item xs={5} className={classes.vertSlider}>
            <Slider
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
      </form>
    </React.Fragment>
  );
}
