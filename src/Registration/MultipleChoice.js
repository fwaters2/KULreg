import React from "react";
import { Typography, Button } from "@material-ui/core";
import "../Choices.json";
const data = require("../Choices.json");

export default function MultipleChoice(props) {
  const { classes, category, values, handleButtonClick } = props;

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        {category}
      </Typography>
      <form className={classes.form}>
        {data[category].options.map(option => (
          <Button
            key={option.value}
            id={option.value}
            color={"primary"}
            onClick={(e)=>handleButtonClick(category,e.currentTarget.id)}
            fullWidth
            variant={option.value===values[category]?"contained":"outlined"}
          >
            {option.display}
          </Button>
        ))}
      </form>
    </React.Fragment>
  );
}
