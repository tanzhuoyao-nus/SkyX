import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'; 
import { db } from './firebase';

function cityPicker(city) {
    if (city === "Tokyo") {
      return "TYO";
    } else if (city === "Bali") {
      return "DPS";
    } else if (city=== "London") {
      return "LON";
    } else if (city === "Hong Kong") {
      return "HKG";
    } else {
      return "KUL";
    }
  }

async function getFirebaseData(city) {
    const document = await db.collection('flight_price_' + city).doc("Prices").get();
    const all_time_average = await document.get("All Time Average"); 
    // console.log(all_time_average); 
    const all_time_high = await document.get("All Time High");
    // console.log(all_time_high); 
    const all_time_low = await document.get("All Time Low");
    var output_arr = [];
    output_arr[0] = all_time_average.toFixed(2);
    output_arr[1] = all_time_high; 
    output_arr[2] = all_time_low; 
    return output_arr;
    
}

 class OutlinedCard extends React.Component {
    constructor() { 
        super(); 
        this.state={ 
            all_time_average: '', 
            all_time_high: '', 
            all_time_low: ''  
        }; 
    }
  
  async componentDidMount() { 
    const city = cityPicker(this.props.name);
    var all_time_prices = await getFirebaseData(city).catch(err => console.log("Oops error"));
    this.setState({ 
        all_time_average: all_time_prices[0], 
        all_time_high: all_time_prices[1], 
        all_time_low: all_time_prices[2]
        
      })
  }

  render(){
    return (
        <Grid id="card" container spacing={3} justify="center">
            <Card variant="outlined" >
                <CardContent id="alltimeavg">
                    <Typography variant="h4" component="h1">
                      Average Price:
                    </Typography>
                </CardContent>
                <CardActions id="alltimebody">
                    <h2>${ this.state.all_time_average }</h2>
                </CardActions>
            </Card>
            <Card variant="outlined">
                <CardContent id="alltimehigh">
                    <Typography variant="h4" component="h1">
                      Highest Price:
                    </Typography>
                </CardContent>
                <CardActions id="alltimebody">
                    <h2>${ this.state.all_time_high }</h2>
                </CardActions>
            </Card>
            <Card variant="outlined">
                <CardContent id="alltimelow">
                    <Typography variant="h4" component="h1">
                      Lowest Price:
                    </Typography>
                </CardContent>
                <CardActions id="alltimebody">
                    <h2>${ this.state.all_time_low }</h2>
                </CardActions>
            </Card>
        </Grid>
        );
    } 
}

export default OutlinedCard; 