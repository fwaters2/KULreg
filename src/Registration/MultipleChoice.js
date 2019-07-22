import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import "../Choices.json";
const data = require("../Choices.json");

export default function MultipleChoice(props) {
  const { category, values, handleButtonClick } = props;

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {data[category].options.map(option => (
          <Grid item xs={12} key={option.value}>
            <Button
              id={option.value}
              color={"primary"}
              onClick={e => handleButtonClick(category, e.currentTarget.id)}
              fullWidth
              variant={
                option.value === values[category] ? "outlined" : "contained"
              }
            >
              {option.display}
            </Button>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
