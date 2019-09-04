import React from "react";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Switch
} from "@material-ui/core";
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
import Carousel from "./5Jersey/Carousel";
import Checkout from "./Checkout/Checkout";
import "./lang.json";
import "./KUL_final.svg";
import "./InitialState.json";
import Result from "./Checkout/Result";
const languages = require("./lang.json");
const logo = require("./KUL_final.svg");
const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(2),
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
  total: {
    fontWeight: "700"
  }
}));

export default function FormContainer(props) {
  const {
    toggleLanguage,
    handleChange,
    handleButtonClick,
    handleComplexChange,
    handleSliderChange,
    changeStep,
    values,
    lang,
    step,
    stepChange,
    chinese,
    isSignedIn,
    setValues
  } = props;
  const classes = useStyles();
  const pages = [
    {
      title: languages[lang].names,
      content: (
        <Name
          language={languages[lang]}
          classes={classes}
          handleChange={handleChange}
          values={values}
        />
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
        <Carousel
          language={languages[lang]}
          handleComplexChange={handleComplexChange}
          classes={classes}
          values={values}
        />
      )
    },
    {
      title: languages[lang].checkout,
      content: (
        <Checkout
          language={languages[lang]}
          classes={classes}
          values={values}
          handleComplexChange={handleComplexChange}
          setValues={setValues}
        />
      )
    }
  ];

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <img src={logo} alt="logo" height="40px" />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Typography align="right" variant="body2">
                  中文
                </Typography>
              </Grid>
              <Grid item>
                <Switch checked={chinese} onChange={toggleLanguage} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {isSignedIn ? (
          <React.Fragment>
            <Typography className={classes.title} component="h1" variant="h5">
              {pages[step].title}
            </Typography>
            {pages[step].content}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography className={classes.title} component="h1" variant="h5">
              {languages[lang].signIn}
            </Typography>
            <Register
              changeStep={changeStep}
              classes={classes}
              handleChange={handleChange}
              values={values}
              language={languages[lang]}
            />
          </React.Fragment>
        )}
        <Result
          //langStrings={langStrings}
          values={values}
          open={values.isRegistered}
          onClose={handleComplexChange("isRegistered", true)}
          handleChange={handleChange}
          setValues={setValues}
          // result={result}
        />
        <Grid className={classes.footer} container spacing={3}>
          {step === 0 || step >= pages.length ? null : (
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
          {step < pages.length - 1 ? (
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
