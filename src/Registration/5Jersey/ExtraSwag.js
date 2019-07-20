import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./SwagPics/Hat_Black.PNG";
import "./SwagPics/Hat_White.jpg";
import "./SwagPics/Disc_Black.jpg";
import "./SwagPics/Disc_White.jpg";
import { FormControl, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
const blackHatPic = require("./SwagPics/Hat_Black.PNG");
const whiteHatPic = require("./SwagPics/Hat_White.jpg");
const blackDiscPic = require("./SwagPics/Disc_Black.jpg");
const whiteDiscPic = require("./SwagPics/Disc_White.jpg");

export default function ExtraSwag(props) {
  const { classes } = props;
  const swag = [
    { title: "Black Disc", image: blackDiscPic, price: "400nt" },
    { title: "White Disc", image: whiteDiscPic, price: "400nt" },
    { title: "Black Hat", image: blackHatPic, price: "200nt" },
    { title: "White Hat", image: whiteHatPic, price: "200nt" }
  ];
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Extra Swag
      </Typography>
      <form className={classes.form}>
        <CssBaseline />
        <main>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={1}>
              {swag.map(item => (
                <Grid item key={item.title} xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.title}
                      </Typography>
                      <FormControl component="fieldset">
                        <FormGroup
                          aria-label="position"
                          name="position"
                          value=''
                          //onChange={handleChange}
                          row
                        >
                          <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" />}
                            label={item.price}
                            labelPlacement="start"
                          />
                        </FormGroup>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </form>
      <div style={{backgroundColor:"red"}}>Placeholder for Extra Jersey Option</div>
    </React.Fragment>
  );
}
