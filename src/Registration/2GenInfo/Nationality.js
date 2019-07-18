import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

export default class Nationality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationality: ""
    };
  }
  render() {
    return (
      <div>
        {this.state.nationality === "" ? (
          <h1>Where are you from?</h1>
        ) : this.state.nationality === "Taiwan" ? (
          <h1>你好!</h1>
        ) : (
          <h1>Hello Person not from Taiwan</h1>
        )}
        <TextField
          id="country"
          label="Country"
          fullWidth
          value={this.state.nationality}
          select
          //onChange={props.handleChange("country")}
          onChange={e => this.setState({ nationality: e.target.value })}
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
        <br />
        <br />

        <Button variant="contained" color="primary">
          Let's Go!
        </Button>
      </div>
    );
  }
}
