import React from "react";
import FormExample from "./FormExample";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, ButtonGroup, Grid, Paper } from "@material-ui/core";
import Nationality from "./2GenInfo/Nationality";
import Returning from "./2GenInfo/Returning";
import Register from "./Register";
import Birthday from "./2GenInfo/Birthday";
import Name from "./2GenInfo/Name";
import Contact from "./4CapInfo/Contact";
import Experience from "./3Draft/Experience";
import Athl from "./3Draft/Athl";
import Language from "./4CapInfo/Language";

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
    textAlign:'center',
    height: 300,
    
  },
  picButton:{
    height: 100
  }
}));

export default function FormContainer() {
  const [step, stepChange] = React.useState(1);
  const classes = useStyles();
  const pages = [
    <FormExample />,
    <Register classes={classes} />,
    <Name classes={classes} />,
    <Birthday classes={classes} />,
    <Nationality classes={classes} />,
    <Returning classes={classes} />,
    <Gender classes={classes} />,
    <Height classes={classes} />,
    <Experience classes={classes} />,
    <Athl classes={classes} />,
    <Contact classes={classes} />,
    <Language classes={classes} />
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        {pages[step]}
        <br />
        <br />
        
        <div className={{flexGrow: 1}}> 
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
        <Grid item xs={6} >
          <Button
          variant="outlined"
          color="primary"
          
          onClick={() => stepChange(step + 1)}
          
        >
          Next
        </Button>
        </Grid>
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
