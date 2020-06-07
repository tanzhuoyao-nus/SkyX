import React from 'react';
import { Line } from 'react-chartjs-2';
import 'react-chartjs-2';
import { db } from './firebase';
import '../pages/pricechart'

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

function incrementDay(dateStr) {
  var dateArr = dateStr.split("-");
  var date = new Date();
  date.setFullYear(parseInt(dateArr[0]));
  date.setMonth(parseInt(dateArr[1] - 1));
  date.setDate(parseInt(dateArr[2]));
  var nextDay = date.getDate() + 1;
  date.setDate(nextDay);
  var dateArr_ = date.toLocaleDateString().split("/");
  var year = dateArr_[2];
  var month = dateArr_[1];
  var day = dateArr_[0];
  var outputStr = year + "-" + month + "-" + day;
  return outputStr;
}

function convert2dp(arr){
  var newArr = [];
  for(let i=0; i<arr.length; i++){
      newArr.push(arr[i].toFixed(2));
  }
  return newArr;
}

async function getFirebaseData(city, date_arr) {
  const document = await db.collection('flight_price_' + city).doc("Prices").get();
  const avg_prices = await document.get("Average Prices"); 
  const high_prices = await document.get("Highest Prices");
  const low_prices = await document.get("Lowest Prices");
  const size = Object.values(avg_prices).length;
  var price_arr = [];
  var highest_arr = [];
  var lowest_arr = [];
  var date = "2020-06-21";
  for (var x= 0; x < size; x++) { 
    date_arr[x] = date;
    price_arr[x] = avg_prices[date];
    highest_arr[x] = high_prices[date];
    lowest_arr[x] = low_prices[date];
    date = incrementDay(date);
  }
  var output_arr = [];
  output_arr[0] = convert2dp(price_arr);
  output_arr[1] = highest_arr;
  output_arr[2] = lowest_arr;
  console.log(output_arr);
  return output_arr;
}

class Chart extends React.Component {
    constructor() {
      super();
      this.state = { 
        labels: [],
        datasets: [
            {
              label: 'Average Prices',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 5,
              data : []
            }, 
            {
              label: 'Highest Prices',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: '#E1A18E',
              borderWidth: 5,
              data : []
            }, 
            {
              label: 'Lowest Prices',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: '#cae7c1',
              borderWidth: 5,
              data : []
            }
        ]
      };
    }

    async componentDidMount() {
      const city = cityPicker(this.props.name);
      var date_arr = [];
      var final_prices = await getFirebaseData(city, date_arr).catch(err => console.log("Oops error"));
      if (this.state.labels !== date_arr) {
        this.setState({ labels: date_arr });
      }
      if (this.state.datasets[0].data !== final_prices) {
        this.setState({ datasets: 
          [
            {
                label: 'Average Prices',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data : final_prices[0]
            },
            {
              label: 'Highest Prices',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: '#E1A18E',
              borderWidth: 2,
              data : final_prices[1]
            }, 
            {
              label: 'Lowest Prices',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: '#cae7c1',
              borderWidth: 2,
              data : final_prices[2]
            }
          ]
        })
      };
    }

    render() {    
      return (
        <div>
          <Line 
  
            width={500}
            data={ this.state }
            options={{
              title:{
                display:true,
                text: "Flight prices to " + this.props.name,
                fontSize:30
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
}
 
export default Chart;
