import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./SwagPics/hatBlack2.png";
import "./SwagPics/Hat_White.jpg";
import "./SwagPics/Disc_Black.jpg";
import "./SwagPics/Disc_White.jpg";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
const blackHatPic = require("./SwagPics/hatBlack2.png");
const whiteHatPic = require("./SwagPics/Hat_White.jpg");
const blackDiscPic = require("./SwagPics/Disc_Black.jpg");
const whiteDiscPic = require("./SwagPics/Disc_White.jpg");

export default function ExtraSwag(props) {
  const { classes, values, handleCheckBoxToggle } = props;
  const swag = [
    {
      id: "discBlack",
      title: "Black Disc",
      image: blackDiscPic,
      price: "400nt"
    },
    {
      id: "discWhite",
      title: "White Disc",
      image: whiteDiscPic,
      price: "400nt"
    },
    { id: "hatBlack", title: "Black Hat", image: blackHatPic, price: "200nt" },
    { id: "hatWhite", title: "White Hat", image: whiteHatPic, price: "200nt" }
  ];
  return (
    <React.Fragment>
      <Container className={classes.cardGrid}>
        <Grid container spacing={1}>
          {swag.map(item => (
            <Grid item key={item.title} xs={6}>
              <Card>
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
                    <FormGroup aria-label="position" name="position" row>
                      <FormControlLabel
                        value="start"
                        control={
                          <Checkbox
                            color="primary"
                            onChange={handleCheckBoxToggle(
                              item.id,
                              values[item.id]
                            )}
                            checked={values[item.id]}
                          />
                        }
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
      <div style={{ backgroundColor: "red" }}>
        Placeholder for Extra Jersey Option
      </div>
    </React.Fragment>
  );
}
