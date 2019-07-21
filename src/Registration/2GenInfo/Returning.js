import React from "react";
import {
  Button,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
  Input,
  TextField,
  Typography,
  Grid
} from "@material-ui/core";

export default function Returning(props) {
  const { classes, handleComplexChange, handleChange, values, handleSliderChange } = props;

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
      <Typography component="h1" variant="h5">
        First Season?
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleComplexChange("seasons", 0)}
              color="primary"
            >
              Yep!
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleComplexChange("seasons", 1)}
              color="primary"
            >
              Back for more?
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  ) : values.seasons === 0 ? (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        First Season?
      </Typography>
      <form className={classes.form}>
        <InputLabel>Referred By:</InputLabel>
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
        <FormHelperText>How did you hear about us?</FormHelperText>
      </form>
      <br />
      {values.source === "Player" || values.source === "Friend" ? (
        <TextField
          id="standard-helperText"
          label="Player/Friend"
          value={values.referredBy}
          onChange={handleChange("referredBy")}
          className={classes.textField}
          helperText="Who should get credit?"
          margin="normal"
        />
      ) : null}
      <br />
      <Button
        variant="outlined"
        onClick={handleComplexChange("seasons", "unknown")}
      >
        Back
      </Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div>How Many season's have you played?</div>
      <Slider
        value={values.seasons}
        onChange= {handleSliderChange("seasons")}
        min={1}
        max={7}
        valueLabelDisplay="on"
      />
      <Button
        variant="outlined"
        onClick={handleComplexChange("seasons", "unknown")}
      >
        Back
      </Button>
    </React.Fragment>
  );
}
