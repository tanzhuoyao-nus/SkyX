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
            <h1 id="center"> Chart Data </h1>
            <Container> 
            <div> Historical Average: </div><hr/>
            <div> Monthly Average: </div><hr/>
            <div> Monthly High: </div><hr/>
            <div> Monthly Low:</div><hr/>
            <div> Weekly Average: </div> <hr/>
            </Container>
            <Container>
            <div> Weekly High: </div><hr/>
            <div> Weekly Low: </div><hr/>
            <div> Monthly Price Range:  </div><hr/>
            <div> Weekly Price Range: </div>
            </Container>
          </Container>
      </Paper>
      
    </div>
  );
}