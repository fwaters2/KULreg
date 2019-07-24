import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";

export default function Commitments(props) {
  const { language, values, handleChange } = props;
  //   const [values, setValues] = React.useState({
  //     date: "In",
  //     name: "hai"
  //   });
  const dates = ["Day 1", "Day 2", "Day 3", "Day 4", language.finals];

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  //   function handleChange(event) {
  //     setValues(oldValues => ({
  //       ...oldValues,
  //       [event.target.name]: event.target.value
  //     }));
  //   }
  function dayInput(date) {
    return (
      <FormControl fullWidth variant="outlined" key={date}>
        <InputLabel ref={inputLabel} htmlFor="outlined-date-simple">
          {date}
        </InputLabel>
        <Select
          fullWidth
          value={values[date]}
          onChange={handleChange(date)}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="date"
              id="outlined-date-simple"
            />
          }
        >
          <MenuItem value={"In"}>{language.going}</MenuItem>
          <MenuItem value={"Likely"}>{language.likely}</MenuItem>
          <MenuItem value={"Unlikely"}>{language.unlikely}</MenuItem>
          <MenuItem value={"Out"}>{language.out}</MenuItem>
        </Select>
      </FormControl>
    );
  }

  return (
    <React.Fragment>
      
        <Grid container>
          <Grid item container justify='center' alignItems='center' xs={8}>
            <i className="fas fa-calendar-alt fa-10x" />
          </Grid>
          <Grid item xs={4}>
            {dates.map(day => dayInput(day))}
          </Grid>
        </Grid>
      
    </React.Fragment>
  );
}
