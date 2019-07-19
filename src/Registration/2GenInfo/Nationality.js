import React from "react";
import TextField from "@material-ui/core/TextField";
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import {Typography } from "@material-ui/core";

export default function Nationality(props) {
  const [nationality, newNation] = React.useState("");

  const { classes } = props;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Nationality
      </Typography>
      <form className={classes.form}>
        <TextField
        autoFocus
          id="country"
          label="Country"
          fullWidth
          value={nationality}
          select
          //onChange={props.handleChange("country")}
          onChange={e => newNation(e.target.value)}
        >
          <MenuItem key={"Taiwan"} value={"Taiwan"}>
            {"Taiwan"}
          </MenuItem>
          <MenuItem key={"United States"} value={"United States"}>
            {"United States"}
          </MenuItem>
          <MenuItem key={"Canada"} value={"Canada"}>
            {"Canada"}
          </MenuItem>
          <hr />
          {CountryRegionData.map((option, index) => (
            <MenuItem key={option[0]} value={option[0]}>
              {option[0]}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </React.Fragment>
  );
}
