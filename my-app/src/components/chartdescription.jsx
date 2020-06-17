import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container}  from '@material-ui/core'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper id="ChartData" elevation={5}> 
          <Container> 
            <h1 id="heading"> Chart Data </h1>
            <div> Historical Average: </div><hr className = "chartDataLine" />
            <div> Monthly Average: </div><hr className = "chartDataLine" />
            <div> Monthly High: </div><hr className = "chartDataLine" />
            <div> Monthly Low:</div><hr className = "chartDataLine" />
            <div> Weekly Average: </div><hr className = "chartDataLine" />
            <div> Weekly High: </div><hr className = "chartDataLine" />
            <div> Weekly Low: </div><hr className = "chartDataLine" />
            <div> Monthly Price Range:  </div><hr className = "chartDataLine" />
            <div> Weekly Price Range: </div>
          </Container>
      </Paper>
      
    </div>
  );
}