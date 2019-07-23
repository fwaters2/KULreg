import React from "react";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography, Paper } from "@material-ui/core";
import Nationality from "./2GenInfo/Nationality";
import Returning from "./2GenInfo/Returning";
import Register from "./Register";
import Birthday from "./2GenInfo/Birthday";
import Name from "./2GenInfo/Name";
import Contact from "./4CapInfo/Contact";
import Language from "./4CapInfo/Language";
import MultipleChoice from "./MultipleChoice";
import Interests from "./4CapInfo/Interests";
import Commitments from "./4CapInfo/Commitments";
import JerseyOrder from "./5Jersey/JerseyOrder";
import ExtraSwag from "./5Jersey/ExtraSwag";
import Checkout from "./Checkout/Checkout";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3)
  },
  footer: {
    marginTop: theme.spacing(1),
    flexGrow: 1
  },
  picButton: {
    height: 150
  },

  //Below here is under review to be removed

  root: {
    padding: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(1)
  },
  vertSlider: {
    textAlign: "center",
    height: 300
  },
  radioPage: {
    display: "flex"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  total: {
    fontWeight: "700"
  }
}));

export default function FormContainer() {
  const [step, stepChange] = React.useState(0);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    chName: "",
    nickName: "",
    birthday: null,
    nationality: "",
    seasons: "unknown",
    source: "",
    referredBy: "",
    gender: "",
    height: null,
    Skills: "test",
    EXP: "",
    ATHL: "",
    facebookContact: false,
    facebookID:"",
    lineContact:false,
    lineID:"",
    English: "",
    Chinese: "",
    Party: "",
    Improve: "",
    "Day 1": "",
    "Day 2": "",
    "Day 3": "",
    "Day 4": "",
    Finals: "",
    jerseyBack: "",
    size: "",
    jerseyNum1: "",
    jerseyNum2: "",
    discBlack: false,
    discWhite: false,
    hatBlack: false,
    hatWhite: false,
    order: []
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleButtonClick = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const handleComplexChange = (name, value) => () => {
    setValues({ ...values, [name]: value });
  };
  const handleSliderChange = name => (e, value) => {
    setValues({ ...values, [name]: value });
  };
  const handleCheckBoxToggle = (name, value) => () => {
    setValues({ ...values, [name]: !value });
  };
  const changeStep = () => {
    stepChange(step + 1);
  };
  const classes = useStyles();
  const pages = [
    {
      title: "Sign up",
      content: (
        <Register
          changeStep={changeStep}
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: "Names",
      content: (
        <Name classes={classes} handleChange={handleChange} values={values} />
      )
    },
    {
      title: "Birthday",
      content: (
        <Birthday
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: "Nationality",
      content: (
        <Nationality
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: "First Season?",
      content: (
        <Returning
          classes={classes}
          handleChange={handleChange}
          handleComplexChange={handleComplexChange}
          values={values}
          handleSliderChange={handleSliderChange}
        />
      )
    },
    {
      title: "Gender",
      content: (
        <Gender
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: "Height",
      content: (
        <Height
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleSliderChange={handleSliderChange}
        />
      )
    },
    {
      title: "Skills",
      content: (
        <MultipleChoice
          classes={classes}
          category="Skills"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: "Experience",
      content: (
        <MultipleChoice
          classes={classes}
          category="EXP"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: "Athletecism",
      content: (
        <MultipleChoice
          classes={classes}
          category="ATHL"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: "Contact Information",
      content: (
        <Contact
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: "Languages",
      content: (
        <Language
          classes={classes}
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: "Interests",
      content: (
        <Interests
          classes={classes}
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: "Commitments",
      content: (
        <Commitments
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: "Team Jersey",
      content: (
        <JerseyOrder
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: "Extra Swag",
      content: (
        <ExtraSwag
          handleCheckBoxToggle={handleCheckBoxToggle}
          classes={classes}
          values={values}
        />
      )
    },
    {
      title: "Checkout",
      content: <Checkout classes={classes} values={values} />
    }
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div>{step}</div>
      <Paper className={classes.paper}>
        <Typography className={classes.title} component="h1" variant="h5">
          {pages[step].title}
        </Typography>
        {pages[step].content}
        
        
        <Grid className={classes.footer} container spacing={3}>
       
          {step === 0 || step >= pages.length - 1 ? null : (
           
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => stepChange(step - 1)}
              >
                Back
              </Button>
            </Grid>
          )}
          {step < pages.length - 1 && step > 0 ? (
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => stepChange(step + 1)}
              >
                Next
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </Container>
  );
}
