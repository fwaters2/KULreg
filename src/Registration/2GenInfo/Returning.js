import React from "react";
import {
  Button,
  Slider,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
  Input,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    //marginTop: theme.spacing(2),
  }
}));

export default function Returning() {
  const [unChosenOption, updateChoice] = React.useState(true);
  const [playerState, handleEXP] = React.useState(null);
  const [referredBy, handleReferrer] = React.useState("");
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   age: "",
  //   name: "hai"
  // });

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
  function handleSource(e){
    handleReferrer(e.target.value)
    console.log(e.target.value)
  }

  ///Previous
  function toggleNewness() {
    updateChoice(!unChosenOption);
    handleEXP("New");
  }
  function toggleVeteran() {
    updateChoice(!unChosenOption);
    handleEXP("Veteran");
  }
  function back() {
    updateChoice(!unChosenOption);
  }

  return unChosenOption ? (
    <React.Fragment>
      <Button variant="outlined" onClick={toggleNewness} color="primary">
        First Season?
      </Button>
      <Button variant="outlined" onClick={toggleVeteran} color="primary">
        Back for more?
      </Button>
    </React.Fragment>
  ) : playerState === "New" ? (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Source</InputLabel>
        <Select
          value={referredBy}
          onChange={handleSource}
          input={<Input name="referredBy" id="age-helper" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Facebook"}>Facebook</MenuItem>
          <MenuItem value={"Google"}>Google</MenuItem>
          <MenuItem value={"Pickup"}>Pickup</MenuItem>
          <MenuItem value={"Player"}>Player</MenuItem>
          <MenuItem value={"Friend"}>Friend</MenuItem>
        </Select>
        <FormHelperText>How did you hear about us?</FormHelperText>
      </FormControl>
      <br/>
      {referredBy==="Player" || referredBy==="Friend"?
      <TextField
        id="standard-helperText"
        label="Player/Friend"
        value=""
        className={classes.textField}
        helperText="Who should get credit?"
        margin="normal"
      />
  :null}
      <br />
      <Button variant="outlined" onClick={back}>
        Back
      </Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div>How Many season's have you played?</div>
      <Slider min={1} max={7} />
      <Button variant="outlined" onClick={back}>
        Back
      </Button>
    </React.Fragment>
  );
}
