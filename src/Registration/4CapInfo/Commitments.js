import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography, Grid } from "@material-ui/core";

export default function Commitments(props) {
  const { classes } = props;
  //   const [values, setValues] = React.useState({
  //     date: "In",
  //     name: "hai"
  //   });
  const dates = ["Day 1", "Day 2", "Day 3", "Day 4", "Finals"];

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
      <FormControl fullWidth variant="outlined" key={date} >
        <InputLabel ref={inputLabel} htmlFor="outlined-date-simple">
          {date}
        </InputLabel>
        <Select
          fullWidth
          value={''}
          //onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="date"
              id="outlined-date-simple"
            />
          }
        >
          <MenuItem value={"In"}>In</MenuItem>
          <MenuItem value={"Likely"}>Likely</MenuItem>
          <MenuItem value={"Unlikely"}>Unlikely</MenuItem>
          <MenuItem value={"Out"}>Out</MenuItem>
        </Select>
      </FormControl>
    );
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Commitments
      </Typography>
      <form className={classes.form} autoComplete="off">
        <Grid container>
          <Grid item xs={8}>
            <i className="fas fa-calendar-alt fa-10x" />
          </Grid>
          <Grid item xs={4}>
            {dates.map(day => dayInput(day))}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
