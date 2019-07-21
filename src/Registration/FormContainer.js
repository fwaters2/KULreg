import React from "react";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid } from "@material-ui/core";
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
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
  picButton: {
    height: 100
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  }
}));

export default function FormContainer() {
  const [step, stepChange] = React.useState(16);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    chName: "",
    nickName: "",
    birthday: "1990-06-06",
    nationality: "",
    seasons: "unknown",
    source: "",
    referredBy: "",
    gender: "",
    height:160,
    Skills:"test",
    EXP:"",
    ATHL:"",
    English:"",
    Chinese:"",
    Party:"",
    Improve:"",
    "Day 1":"",
    "Day 2":"",
    "Day 3":"",
    "Day 4":"",
    Finals:"",
    jerseyBack:"",
    size:"",
    jerseyNum1:"",
    jerseyNum2:"",
    discBlack:false,
    discWhite:false,
    hatBlack:false,
    hatWhite:false,
    order:[]
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleButtonClick = (name, value) => {
    setValues({ ...values, [name]: value });
  }
  const handleComplexChange = (name, value) => () => {
    setValues({ ...values, [name]: value });
  };
  const handleSliderChange = name => (e, value) => {
    setValues({ ...values, [name]: value });
  };
  const handleCheckBoxToggle = (name, value) => () => {
    setValues({ ...values, [name]: !value });
  }
  const classes = useStyles();
  const pages = [
    <Register classes={classes} handleChange={handleChange} values={values} />,
    <Name classes={classes} handleChange={handleChange} values={values} />,
    <Birthday classes={classes} handleChange={handleChange} values={values} />,
    <Nationality
      classes={classes}
      handleChange={handleChange}
      values={values}
    />,
    <Returning
      classes={classes}
      handleChange={handleChange}
      handleComplexChange={handleComplexChange}
      values={values}
      handleSliderChange={handleSliderChange}
    />,
    <Gender
      classes={classes}
      handleChange={handleChange}
      values={values}
      handleComplexChange={handleComplexChange}
    />,
    <Height
      classes={classes}
      handleChange={handleChange}
      values={values}
      handleSliderChange={handleSliderChange}
    />,
    <MultipleChoice
      classes={classes}
      category="Skills"
      values={values}
      handleButtonClick={handleButtonClick}
    />,
    <MultipleChoice
      classes={classes}
      category="EXP"
      values={values}
      handleButtonClick={handleButtonClick}
    />,
    <MultipleChoice
      classes={classes}
      category="ATHL"
      values={values}
      handleButtonClick={handleButtonClick}
    />,
    <Contact classes={classes} handleChange={handleChange} values={values} />,
    <Language classes={classes} values={values} handleButtonClick={handleButtonClick}/>,
    <Interests classes={classes} values={values} handleButtonClick={handleButtonClick} />,
    <Commitments
      classes={classes}
      handleChange={handleChange}
      values={values}
    />,
    <JerseyOrder
      classes={classes}
      handleChange={handleChange}
      values={values}
    />,
    <ExtraSwag handleCheckBoxToggle={handleCheckBoxToggle} classes={classes} values={values} />,
    <Checkout classes={classes} values={values} />
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        
        {pages[step]}
        <br />
        <br />

        <div className={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {step === 0 ? null : (
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => stepChange(step - 1)}
                >
                  Back
                </Button>
              </Grid>
            )}
            {step < pages.length - 1 ? (
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => stepChange(step + 1)}
                >
                  Next
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </div>
      </div>
    </Container>
  );
  // switch (step) {
  //   case "example":
  //     return <FormExample />;
  //   case 0:
  //     return <Form00Register />;
  //   case 1:
  //     return <Form01Name />;
  //   case 2:
  //     return <Height classes={classes} />;
  //   default:
  //     return <div>Step Not found</div>;
  // }
}
