import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core'; 
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

async function convert2dp(arr){
  var newArr = [];
  for(let i=0; i<arr.length; i++){
      newArr.push(arr[i].toFixed(2));
  }
  return newArr;
}

async function getFirebaseData(city) {
    const document = await db.collection('flight_price_' + city).doc("Prices").get();
    const all_time_average = await document.get("All Time Average"); 
    const all_time_average1 = await convert2dp(all_time_average); 
    console.log(all_time_average1); 
    const all_time_high = await document.get("All Time High");
    console.log(all_time_high); 
    const all_time_low = await document.get("All Time Low");
    var output_arr = [];
    output_arr[0]= await convert2dp(all_time_average); 
    output_arr[1]= all_time_high; 
    output_arr[2]= all_time_low; 
    console.log(output_arr); 
    return output_arr;
    
}

 class OutlinedCard extends React.Component {

    constructor() { 
        super(); 
        this.state={ 
            all_time_average:0, 
            all_time_high: 0, 
            all_time_low: 0  
        }; 
    }
  
  async componentDidMount() { 
    const city = cityPicker(this.props.name);
    var all_time_prices = await getFirebaseData(city).catch(err => console.log("Oops error"));
    console.log(all_time_prices); 
    this.setState({ //update of state 
        // all_time_average: all_time_prices[0], 
        all_time_high: all_time_prices[1], 
        all_time_low: all_time_prices[2], 
        
      })
  }

  render(){
    
    return (
        
        <Grid id ="card" container spacing={3} justify="center">
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Average Price: { this.state.all_time_average }
                    </Typography>
                </CardContent>

            </Card>
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Highest Price: { this.state.all_time_high }
                    </Typography>
                </CardContent>

            </Card>
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Lowest Price: { this.state.all_time_low }
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
        );
    } 
}

export default OutlinedCard; 