import React from "react";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography, Paper, Switch } from "@material-ui/core";
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
import './lang.json'
const languages = require('./lang.json')
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
  const [lang, toggleLang ] = React.useState("en")
  const [chinese,toggleChinese] = React.useState(false)
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
  const toggleLanguage = () => {
    lang==="en"?toggleLang("ch"):toggleLang("en")
      toggleChinese(!chinese)
  }
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
      title: languages[lang].signIn,
      content: (
        <Register
          changeStep={changeStep}
          classes={classes}
          handleChange={handleChange}
          values={values}
          language={languages[lang]}
        />
      )
    },
    {
      title: languages[lang].names,
      content: (
        <Name language={languages[lang]} classes={classes} handleChange={handleChange} values={values} />
      )
    },
    {
      title: languages[lang].birthday,
      content: (
        <Birthday
        language={languages[lang]}  
        classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: languages[lang].nationality,
      content: (
        <Nationality
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: languages[lang].firstSeason,
      content: (
        <Returning
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          handleComplexChange={handleComplexChange}
          values={values}
          handleSliderChange={handleSliderChange}
        />
      )
    },
    {
      title: languages[lang].gender,
      content: (
        <Gender
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: languages[lang].height,
      content: (
        <Height
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleSliderChange={handleSliderChange}
        />
      )
    },
    {
      title: languages[lang].skills,
      content: (
        <MultipleChoice
        language={languages[lang]}
          classes={classes}
          category="Skills"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: languages[lang].exp,
      content: (
        <MultipleChoice
        language={languages[lang]}
          classes={classes}
          category="EXP"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: languages[lang].athl,
      content: (
        <MultipleChoice
        language={languages[lang]}
          classes={classes}
          category="ATHL"
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: languages[lang].contactInfo,
      content: (
        <Contact
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
          handleComplexChange={handleComplexChange}
        />
      )
    },
    {
      title: languages[lang].languages,
      content: (
        <Language
        language={languages[lang]}
          classes={classes}
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: languages[lang].interests,
      content: (
        <Interests
        language={languages[lang]}
          classes={classes}
          values={values}
          handleButtonClick={handleButtonClick}
        />
      )
    },
    {
      title: languages[lang].commitments,
      content: (
        <Commitments
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: languages[lang].teamJersey,
      content: (
        <JerseyOrder
        language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
      )
    },
    {
      title: languages[lang].extraSwag,
      content: (
        <ExtraSwag
        language={languages[lang]}
          handleCheckBoxToggle={handleCheckBoxToggle}
          classes={classes}
          values={values}
        />
      )
    },
    {
      title: languages[lang].checkout,
      content: <Checkout language={languages[lang]} classes={classes} values={values} />
    }
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div>{step}</div>
      <Paper className={classes.paper}>
      <Typography align="right" variant="body2">
        <Grid component="label" container alignItems="center">
          <Grid item>中文</Grid>
          <Grid item>
            <Switch
              checked={chinese}
              onChange={toggleLanguage}
              //value="checkedC"
            />
          </Grid>
        </Grid>
      </Typography>
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
               {languages[lang].back}
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
                {languages[lang].next}
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </Container>
  );
}
