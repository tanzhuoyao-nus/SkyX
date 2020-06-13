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

function convert2dp(arr){
  var newArr = [];
  for(let i=0; i<arr.length; i++){
      newArr.push(arr[i].toFixed(2));
  }
  return newArr;
}

async function getFirebaseData(city) {
    const document = await db.collection('flight_price_' + city).doc("Prices").get();
    const all_time_average = await document.get("All Time Average"); 
    const all_time_high = await document.get("All Time High");
    const all_time_low = await document.get("All Time Low");
    var output_arr = [];
    output_arr[0]= convert2dp(all_time_average); 
    output_arr[1]= convert2dp(all_time_high); 
    output_arr[2]= convert2dp(all_time_low); 
    return output_arr;
}

 class OutlinedCard extends React.Component {

    constructor() { 
        super(); 
        this.state={ 
            data: [], 
        }; 
    }
  
  async componentDidMount() { 
    const city = cityPicker(this.props.name);
    var final_prices = await getFirebaseData(city).catch(err => console.log("Oops error"));
    this.setState({ datasets: 
        [
          {
            data : final_prices[0]
          },
          {
            data : final_prices[1]
          }, 
          {
            data : final_prices[2]
          }
        ]
      })
  }

  render(){
    
    return (
        
        <Grid id ="card" container spacing={3} justify="center">
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Average Price: {this.state[0]} 
                    </Typography>
                </CardContent>

            </Card>
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Highest Price: {this.state[1]} 
                    </Typography>
                </CardContent>

            </Card>
            <Card  variant="outlined">
                
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Lowest Price: {this.state[2]} 
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
        );
    } 
}

export default OutlinedCard; 