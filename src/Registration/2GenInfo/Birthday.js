import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Birthday(props) {
  const { language, handleChange, values } = props;
  // const [month, changeMonth] = React.setState(06)
  // const [day, changeDay]=React.setState(17)
  // const [year, changeYear] = React.setState(1990)
  // function localBday(month, day, year){
  //   console.log("hello")

  // }
  return (
    <React.Fragment>
      {/* {localBday()} */}
      <i className="fas fa-birthday-cake fa-5x" />
      <TextField
        autoFocus
        id="date"
        label={language.birthday}
        type="date"
        value={values.birthday}
        defaultValue="1990-01-01"
        onChange={handleChange("birthday")}
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />

      {/* <FormControl fullWidth variant="outlined" key={date}>
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
          <MenuItem value={"In"}>In</MenuItem>
          <MenuItem value={"Likely"}>Likely</MenuItem>
          <MenuItem value={"Unlikely"}>Unlikely</MenuItem>
          <MenuItem value={"Out"}>Out</MenuItem>
        </Select>
      </FormControl> */}
    </React.Fragment>
  );
}
