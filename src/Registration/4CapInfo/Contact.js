import React from "react";
import {
  FormControl,
  FormControlLabel,
  TextField,
  Checkbox,
  FormGroup,
  FormLabel,
  Typography

} from "@material-ui/core";

export default function Contact(props) {
    const [facebook, updateFB ] = React.useState(false)
    const [line, updateLine ] = React.useState(false)
    const {classes} = props
    function toggleFacebook(){
        updateFB(!facebook)
    }
    function toggleLine(){
        updateLine(!line)
    }

  return (
    <React.Fragment>
      
      <Typography component="h1" variant="h5">
         Contact Info
        </Typography>
        <form className={classes.form}>
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
    </form>
    
    </React.Fragment>
  );
}
