import React from "react";
import {
  Slider,
  Typography,
  Grid,
  Input,
  makeStyles,
  InputAdornment
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 300,
  }
});

export default function Height(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(170);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  function unitConverter(cm){
    let alltheinches = Math.floor(cm / 2.54);
    let inches = alltheinches % 12;
    let feet = Math.floor(alltheinches / 12);
    return feet + "ft " + inches + "in";
  };

  const handleBlur = () => {
    if (value < 140) {
      setValue(140);
    } else if (value > 220) {
      setValue(220);
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Height
      </Typography>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Input
            className={classes.input}
            value={value}
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
        <Grid item xs className={classes.root}>
          <Slider
            value={typeof value === "number" ? value : 140}
            onChange={handleSliderChange}
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
