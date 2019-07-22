import React from "react";
import TextField from "@material-ui/core/TextField";
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid, Button, Container } from "@material-ui/core";
import "./Flags/Flag_of_the_United_States.svg";
import "./Flags/Flag_of_Canada_(Pantone).svg";
import "./Flags/Flag_of_the_Republic_of_China.svg";
import "./Flags/Flag_of_England.svg";
import "./Flags/Flag_of_Iraq.svg";
import "./Flags/Flag_of_Australia_(converted).svg";
import "./Flags/Flag_of_Palau.svg";
import "./Flags/Flag_of_South_Africa.svg";
import "./Flags/Flag_of_the_Philippines.svg";
const flagUSA = require("./Flags/Flag_of_the_United_States.svg");
const flagCanada = require("./Flags/Flag_of_Canada_(Pantone).svg");
const flagTaiwan = require("./Flags/Flag_of_the_Republic_of_China.svg");
const flagEngland = require("./Flags/Flag_of_England.svg");
const flagIraq = require("./Flags/Flag_of_Iraq.svg");
const flagAustralia = require("./Flags/Flag_of_Australia_(converted).svg");
const flagPalau = require("./Flags/Flag_of_Palau.svg");
const flagSA = require("./Flags/Flag_of_South_Africa.svg");
const flagPhil = require("./Flags/Flag_of_the_Philippines.svg");

export default function Nationality(props) {
  const { handleChange, values, handleComplexChange } = props;
  const rowOne = [{ country: "Taiwan", image: flagTaiwan, size: 12 }];
  const rowTwo = [
    { country: "United States", image: flagUSA, size: 6 },
    { country: "Canada", image: flagCanada, size: 6 }
  ];
  const rowThree = [
    { country: "United Kingdom", image: flagEngland, size: 2 },
    { country: "Iraq", image: flagIraq, size: 2 },
    { country: "Australia", image: flagAustralia, size: 2 },
    { country: "Palau", image: flagPalau, size: 2 },
    { country: "South Africa", image: flagSA, size: 2 },
    { country: "Philippines", image: flagPhil, size: 2 }
  ];

  const svgButton = (country, image, size, height) => (
    <Grid
      item
      xs={size}
      onClick={handleComplexChange("nationality", country)}
      container
      justify="center"
    >
      <Button
       style={{height:height, padding:"0"}}
        variant={values.nationality === country ? "outlined" : "contained"}
      >
        <svg>
          <filter id="greyscale">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                           0.33 0.33 0.33 0 0
                           0.33 0.33 0.33 0 0
                           0 0 0 1 0"
            />
          </filter>
          <image
            id={country}
            href={image}
            width="100%"
            filter={values.nationality === country ? null : "url(#greyscale)"}
          />
        </svg>
      </Button>
    </Grid>
  );

  function svgExperiment() {
    return (
      <React.Fragment>
        <Grid spacing={1} container>
          {rowOne.map(flag => svgButton(flag.country, flag.image, flag.size, '160px'))}
        

        
          {rowTwo.map(flag => svgButton(flag.country, flag.image, flag.size, '90px'))}
        
          {rowThree.map(flag => svgButton(flag.country, flag.image, flag.size, '32px'))}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {svgExperiment()}
      <TextField
        autoFocus
        id="country"
        label="Other Country"
        fullWidth
        value={values.nationality}
        select
        onChange={handleChange("nationality")}
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
        {CountryRegionData.map(option => (
          <MenuItem key={option[0]} value={option[0]}>
            {option[0]}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
}
