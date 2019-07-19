import React from "react";
import FormExample from "./FormExample";
import Gender from "./3Draft/Gender";
import Height from "./3Draft/Height";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper } from "@material-ui/core";
import Nationality from "./2GenInfo/Nationality";
import Returning from "./2GenInfo/Returning";
import Form00Register from "./Form00Register";
import Birthday from "./2GenInfo/Birthday";
import Name from "./2GenInfo/Name";
import Contact from "./4CapInfo/Contact";
import Experience from "./3Draft/Experience";
import Athl from "./3Draft/Athl";
import Language from "./4CapInfo/Language"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function FormContainer() {
  const [step, stepChange] = React.useState(11);
  const classes = useStyles();
  const pages = [
    <FormExample />,
    <Form00Register />,
    <Name />,
    <Birthday />,
    <Nationality />,
    <Returning />,
    <Gender classes={classes} />,
    <Height classes={classes} />,
    <Experience classes={classes}/>,
    <Athl classes={classes}/>,
    <Contact />,
    <Language classes={classes}/>
  ];
  return(
    <Container>
      <Paper elevation={5} className={classes.root}>
    {pages[step]}
    
    <br/>
    <br/>
    <Button variant='contained' color='secondary' onClick={()=>(stepChange(step - 1 ))}>Go Back</Button>
    <Button variant= 'contained' color='primary' onClick={()=>(stepChange(step + 1 ))}>Advance</Button>
    </Paper>
    </Container>
  )
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
