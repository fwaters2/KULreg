import React from "react";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  female: {
    height: 150,
    color: 'deepPink',
  },
  male: {
    height: 150,
    color: 'blue',
  },
});

export default function Gender(props) {
  const {
    language,
    
    values,
    handleChange,
    handleComplexChange
  } = props;
  const classes= useStyles()
  const genders = [
    "Agender",
    "Androgyne",
    "Androgynous",
    "Bigender",
    "Cis",
    "Cisgender",
    "Cis Female",
    "Cis Male",
    "Cis Man",
    "Cis Woman",
    "Cisgender Female",
    "Cisgender Male",
    "Cisgender Man",
    "Cisgender Woman",
    "Female",
    "Female to Male",
    "FTM",
    "Gender Fluid",
    "Gender Nonconforming",
    "Gender Questioning",
    "Gender Variant",
    "Genderqueer",
    "Intersex",
    "Male",
    "Male to Female",
    "MTF",
    "Neither",
    "Neutrois",
    "Non-binary",
    "Other",
    "Pangender",
    "Trans",
    "Trans*",
    "Trans Female",
    "Trans* Female",
    "Trans Male",
    "Trans* Male",
    "Trans Man",
    "Trans* Man",
    "Trans Person",
    "Trans* Person",
    "Trans Woman",
    "Trans* Woman",
    "Transfeminine",
    "Transgender",
    "Transgender Female",
    "Transgender Male",
    "Transgender Man",
    "Transgender Person",
    "Transgender Woman",
    "Transmasculine",
    "Transsexual",
    "Transsexual Female",
    "Transsexual Male",
    "Transsexual Man",
    "Transsexual Person",
    "Transsexual Woman",
    "Two-Spirit"
  ];
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            variant={values.gender === "Female" ? "outlined" : "contained"}
            
            className={classes.female}
            fullWidth
            onClick={handleComplexChange("gender", "Female")}
          >
            <i className="fas fa-venus fa-5x" />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant={values.gender === "Male" ? "outlined" : "contained"}
            
            className={classes.male}
            fullWidth
            onClick={handleComplexChange("gender", "Male")}
          >
            <i className="fas fa-mars fa-5x" />
          </Button>
        </Grid>
      </Grid>
      <br />
      <TextField
        autoFocus
        label={language.gender}
        fullWidth
        value={values.gender}
        select
        onChange={handleChange("gender")}
      >
        {genders.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
}
