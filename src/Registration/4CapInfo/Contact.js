import React from "react";
import {
  FormControl,
  FormControlLabel,
  TextField,
  Checkbox,
  FormGroup,
  FormLabel
} from "@material-ui/core";

export default function Contact() {
    const [facebook, updateFB ] = React.useState(false)
    const [line, updateLine ] = React.useState(false)
    function toggleFacebook(){
        updateFB(!facebook)
    }
    function toggleLine(){
        updateLine(!line)
    }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Let your captain know the best way to reach you!
      </FormLabel>
      <FormGroup> 
        <FormControlLabel
          control={
            <Checkbox
              checked={facebook}
              value="Facebook"
            onClick={toggleFacebook}
            />
          }
          label="Facebook"
        />
        {facebook ? (
          <TextField label={"What's your name on FB?"} />
        ) : null}
        <FormControlLabel
          control={
            <Checkbox
              checked={line}
              value="Line"
              onClick={toggleLine}
            />
          }
          label="Line"
        />
        {line ? <TextField label={"Line ID"} /> : null}
      </FormGroup>
    </FormControl>
  );
}
