import React from "react";
import {
  Button,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  Input,
  TextField,
  Grid
} from "@material-ui/core";

export default function Returning(props) {
  const {
    handleComplexChange,
    handleChange,
    values,
    handleSliderChange,
    classes
  } = props;

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  // function handleChange(event) {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value
  //   }));
  // }

  return values.seasons === "unknown" ? (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
          className={classes.picButton}
            variant="contained"
            fullWidth
            onClick={handleComplexChange("seasons", 0)}
            color="primary"
          >
            Yep!
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
          className={classes.picButton}
            variant="contained"
            fullWidth
            onClick={handleComplexChange("seasons", 1)}
            color="primary"
          >
            Nope!
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  ) : values.seasons === 0 ? (
    <React.Fragment>
      <InputLabel> How did you hear about us?</InputLabel>
      <Select
        fullWidth
        value={values.source}
        onChange={handleChange("source")}
        input={<Input />}
      >
        <MenuItem value={""}>
          <em>Referred By:</em>
        </MenuItem>
        <MenuItem value={"Facebook"}>Facebook</MenuItem>
        <MenuItem value={"Google"}>Google</MenuItem>
        <MenuItem value={"Pickup"}>Pickup</MenuItem>
        <MenuItem value={"Player"}>Player</MenuItem>
        <MenuItem value={"Friend"}>Friend</MenuItem>
      </Select>

      {values.source === "Player" || values.source === "Friend" ? (
        <TextField
          id="standard-helperText"
          label={values.source}
          value={values.referredBy}
          onChange={handleChange("referredBy")}
          helperText="Who should get credit?"
          margin="normal"
        />
      ) : null}

      <Button
        color="secondary"
        onClick={handleComplexChange("seasons", "unknown")}
      >
        Back
      </Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <InputLabel>How many season's have you played?</InputLabel>
      <Slider
        value={values.seasons}
        onChange={handleSliderChange("seasons")}
        min={1}
        max={7}
        valueLabelDisplay="on"
      />

      <Button
        color="secondary"
        onClick={handleComplexChange("seasons", "unknown")}
      >
        Back
      </Button>
    </React.Fragment>
  );
}
