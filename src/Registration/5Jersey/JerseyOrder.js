import React from "react";
import {
  Typography,
  Grid,
  TextField,
  MenuItem,
  OutlinedInput,
  Select,
  InputLabel,
  FormControl
} from "@material-ui/core";
import "./Sizes only.PNG";
import "./Jersey only.PNG";
const JerseyShirt = require("./Jersey only.PNG");
const JerseySizes = require("./Sizes only.PNG");
export default function JerseyOrder(props) {
  const { classes } = props;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Team Jersey
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              id="standard-required"
              label="Name on back of Jersey"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
              variant="outlined"
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel ref={inputLabel} htmlFor="outlined-date-simple">
                Size
              </InputLabel>
              <Select
                fullWidth
                value=""
                //onChange={handleChange}
                input={
                  <OutlinedInput
                    //labelWidth={labelWidth}
                    name="date"
                    id="outlined-date-simple"
                  />
                }
              >
                <MenuItem value={"XS"}>XS</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-required"
              label="Jersey #"
              className={classes.textField}
              margin="normal"
              helperText="Required*"
              variant="outlined"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-required"
              label="Backup #"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              helperText="Required*"
              fullWidth
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <img width="150em" src={JerseyShirt} alt="Jersey" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={JerseySizes} alt="Jersey Sizing" />
        </Grid>
      </Grid>
      </form>

      
    </React.Fragment>
  );
}
