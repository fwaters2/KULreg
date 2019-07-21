import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const products = [
  { name: 'KUL Logo', desc: 'Early Registration', price: '1200nt' },
  { name: 'Photo', desc: 'White Disc', price: '400nt' },
  { name: 'photo', desc: 'Black Hat', price: '200nt' },
];
const payments = [
  { name: 'Bank Code', detail: '0123' },
  { name: 'Account Number', detail: '012345667' },
];

export default function Checkout(props) {
  const {classes, values} = props
  const aswagOrder = values.discBlack?{name:"value"}:null
  const swagOrder= [values.discBlack,values.discWhite,values.hatBlack,values.hatWhite]
  {console.log(aswagOrder)}
  const items = products.push({
    name:"",
    desc:"",
    price:""
  })
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
   
        {values.discBlack?
        <ListItem className={classes.listItem} >
        <ListItemText primary={"Photo"} secondary={"Black Disc"} />
        <Typography variant="body2">400nt</Typography>
      </ListItem>
      :null}
      {values.discWhite?
        <ListItem className={classes.listItem} >
        <ListItemText primary={"Photo"} secondary={"White Disc"} />
        <Typography variant="body2">400nt</Typography>
      </ListItem>
      :null}
      {values.hatBlack?
        <ListItem className={classes.listItem} >
        <ListItemText primary={"Photo"} secondary={"Black Hat"} />
        <Typography variant="body2">200nt</Typography>
      </ListItem>
      :null}
      {values.hatWhite?
        <ListItem className={classes.listItem} >
        <ListItemText primary={"Photo"} secondary={"White Hat"} />
        <Typography variant="body2">200nt</Typography>
      </ListItem>
      :null}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            2,000nt
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
           <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Transfer Information
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" fullWidth>Submit and Finish!</Button>
    </React.Fragment>
  );
}