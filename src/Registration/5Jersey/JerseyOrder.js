import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Input
} from "@material-ui/core";
import "./Sizes only.PNG";
import "./Jersey only.PNG";
const JerseyShirt = require("./Jersey only.PNG");
const JerseySizes = require("./Sizes only.PNG");
export default function JerseyOrder(props) {
  const { values, handleChange } = props;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={1} alignItems="center">        <Grid item xs={12}>
          <TextField
            id="standard-required"
            label="Name on back of Jersey"
            margin="normal"
            helperText="Required*"
            variant="outlined"
            autoFocus
            fullWidth
            value={values.jerseyBack}
            onChange={handleChange("jerseyBack")}
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            id="standard-required"
            label="Jersey #"
            margin="normal"
            helperText="Required*"
            variant="outlined"
            fullWidth
            type="number"
            value={values.jerseyNum1}
            onChange={handleChange("jerseyNum1")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-required"
            label="Backup #"
            margin="normal"
            variant="outlined"
            helperText="Required*"
            fullWidth
            type="number"
            value={values.jerseyNum2}
            onChange={handleChange("jerseyNum2")}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel ref={inputLabel}>
              Size
            </InputLabel>
            <Select
              fullWidth
              value={values.size}
              onChange={handleChange("size")}
              input={
                <Input
                  //labelWidth={labelWidth}
                />
              }
            >
              <MenuItem value={"XS"}>XS</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
              <MenuItem value={"2XL"}>2XL</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justify="center" item xs={6}>
          <img width="150em" src={JerseyShirt} alt="Jersey" />
        </Grid>
        <Grid container justify="center" item xs={6}>
          <img src={JerseySizes} alt="Jersey Sizing" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
