import React from "react";
import { Button, Grid } from "@material-ui/core";

export default function MultipleChoice(props) {
  const { language, category, values, handleButtonClick } = props;
  const choices = {
    Skills: {
      options: [
        {
          display: language.skill1,
          value: "New"
        },
        {
          display: language.skill2,
          value: "Cutter"
        },
        {
          display: language.skill3,
          value: "2nd Handler"
        },
        {
          display: language.skill4,
          value: "Handler"
        }
      ]
    },
    EXP: {
      options: [
        { display: language.exp1, value: "Newbie" },
        { display: language.exp2, value: "Rookie" },
        { display: language.exp3, value: "Experienced" },
        { display: language.exp4, value: "Expert" }
      ]
    },
    ATHL: {
      options: [
        {
          display: language.athl1,
          value: "Slowest"
        },
        {
          display: language.athl2,
          value: "Slow"
        },
        {
          display: language.athl3,
          value: "Average"
        },
        {
          display: language.athl4,
          value: "Fast"
        },
        {
          display: language.athl5,
          value: "Fastest"
        }
      ]
    },

    English: {
      options: [
        { display: language.native, value: "Native" },
        { display: language.fluent, value: "Fluent" },
        { display: language.intermediate, value: "Intermediate" },
        { display: language.learning, value: "Learning!" },
        { display: language.nonExistent, value: "Non-existent" }
      ]
    },
    Chinese: {
      options: [
        { display: language.native, value: "Native" },
        { display: language.fluent, value: "Fluent" },
        { display: language.intermediate, value: "Intermediate" },
        { display: language.learning, value: "Learning!" },
        { display: language.nonExistent, value: "Non-existent" }
      ]
    },

    Party: {
      options: [
        { display: language.intOption1, value: "High" },
        { display: language.intOption2, value: "Middle" },
        { display: language.intOption3, value: "Low" }
      ]
    },
    Improve: {
      options: [
        { display: language.intOption1, value: "High" },
        { display: language.intOption2, value: "Middle" },
        { display: language.intOption3, value: "Low" }
      ]
    },
  };
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {choices[category].options.map(option => (
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
