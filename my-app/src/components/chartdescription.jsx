import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container}  from '@material-ui/core'; 

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
});

class ChartDescription extends React.Component {  
  render() {
    const { classes } = this.props; 
    console.log(this.props.all_time_average);
    return(
      <div className={ classes.root }>
        <Paper id="ChartData" elevation={5}> 
            <Container> 
              <h1 id="heading"> Chart Data </h1>
              <div> All Time Average: ${ this.props.all_time_average }</div><hr className = "chartDataLine" />
              <div> All Time High: ${ this.props.all_time_high }</div><hr className = "chartDataLine" />
              <div> All TIme Low: ${ this.props.all_time_low }</div><hr className = "chartDataLine" />
              <div> Monthly Average:</div><hr className = "chartDataLine" />
              <div> Monthly High: </div><hr className = "chartDataLine" />
              <div> Monthly Low: </div><hr className = "chartDataLine" />
              <div> All Time Price Range: ${ this.props.all_time_low } - ${ this.props.all_time_high } </div><hr className = "chartDataLine" />
              <div> Monthly Price Range: </div>
            </Container>
        </Paper> 
      </div>
    );
  }
}

export default withStyles(useStyles)(ChartDescription);