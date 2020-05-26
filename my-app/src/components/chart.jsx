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

function getNextMonth() {
  var date = new Date();
  //TO CHANGE TO 30
  var nextMonth = date.getDate() + 29;
  date.setDate(nextMonth);
  var dateArr = date.toLocaleDateString().split("/");
  var year = dateArr[2];
  var month = dateArr[1];
  var day = dateArr[0];
  var dateStr = year + "-" + month + "-" + day;
  return dateStr;
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

async function getFirebaseData(date_, city, date_arr) {
  var price_arr = [];
  for (var x = 0; x < 14; x++) {
    date_arr[x] = date_;
    const document = await db.collection('flight_price_' + city).doc(date_)
    .collection('2020-05-26').doc('Data').get();
    const price = await document.get("Price");
    price_arr[x] = parseInt(price.slice(1));
    date_ = incrementDay(date_);
  }
  console.log(price_arr);
  return price_arr;
}

class Chart extends React.Component {
    constructor() {
      super();
      this.state = { 
        labels: [],
        datasets: [
            {
                label: '$SGD',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 5,
                data : []
            }
        ]
      };
    }

    async componentDidMount() {
      const city = cityPicker(this.props.name);
      var date_arr = [];
      var date_ = getNextMonth();       
      var final_prices = await getFirebaseData(date_, city, date_arr).catch(err => console.log("Oops error"));
      this.state.labels = date_arr;
      this.state.datasets[0].data = final_prices;
      
    }

    render() {    
      console.log(this.state.datasets[0].data);
      return (
        <div>
          <Line 
            data={ this.state }
            options={{
              title:{
                display:true,
                text: "Flight prices to " + this.props.name,
                fontSize:20
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
