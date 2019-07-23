import React from "react";
import {
  FormControl,
  FormControlLabel,
  TextField,
  Checkbox,
  FormGroup,
  FormLabel
} from "@material-ui/core";

export default function Contact(props) {
  const [facebook, updateFB] = React.useState(false);
  const [line, updateLine] = React.useState(false);
  const { values, handleComplexChange, handleChange } = props;
  function toggleFacebook() {}
  function toggleLine() {}

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Let your captain know the best way to reach you!
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.facebookContact}
                onClick={handleComplexChange(
                  "facebookContact",
                  !values.facebookContact
                )}
              />
            }
            label="Facebook"
          />
          {values.facebookContact ? (
            <TextField
              label={"What's your name on FB?"}
              value={values.facebookID}
              onChange={handleChange("facebookID")}
            />
          ) : null}
          <FormControlLabel
            control={
              <Checkbox checked={values.lineContact} onClick={handleComplexChange("lineContact",!values.lineContact)} />
            }
            label="Line"
          />
          {values.lineContact ? <TextField label={"Line ID"}  value={values.lineID}
              onChange={handleChange("lineID")}/> : null}
        </FormGroup>
      </FormControl>
    </React.Fragment>
  );
}
