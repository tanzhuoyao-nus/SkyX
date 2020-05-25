import React from 'react';
import { Line } from 'react-chartjs-2';
import flight_data from '../datasets/2020-06-17-TYO.json';
import { db } from './firebase';
import '../pages/pricechart'

var date_arr = [];
var price_arr = [];

for (var x = 0; x < 14; x++) {
    const { Date, Price } = flight_data[x];
    date_arr[x] = Date;
    price_arr[x] = Price;
}
var price_int_arr = price_arr.map(x =>parseInt(x.slice(1)));

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

function getFourteenDaysAgo() {
  var dateTwoWeeksAgo = new Date();
  var pastDate = dateTwoWeeksAgo.getDate() - 14;
  var month;
  var day;
  dateTwoWeeksAgo.setDate(pastDate);
  if (dateTwoWeeksAgo.getMonth() < 10) {
    month = "0" + dateTwoWeeksAgo.getMonth();
  } else {
    month = dateTwoWeeksAgo.getMonth();
  }
  if (dateTwoWeeksAgo.getDate() < 10) {
    day = "0" + dateTwoWeeksAgo.getDate();
  } else {
    day = dateTwoWeeksAgo.getDate();
  }
  var dateStr = dateTwoWeeksAgo.getFullYear() + "-" + month + "-" + day;
  console.log(dateStr);
  return dateStr;
}

function incrementDay(dateStr) {
  var dateArr = dateStr.split("-");
  var month;
  var day;
  var date = new Date();
  date.setFullYear(parseInt(dateArr[0]));
  date.setMonth(parseInt(dateArr[1]));
  date.setDate(parseInt(dateArr[2]));
  var nextDay = date.getDate() + 1;
  date.setDate(nextDay);
  if (date.getMonth() < 10) {
    month = "0" + date.getMonth();
  } else {
    month = date.getMonth();
  }
  if (date.getDate() < 10) {
    day = "0" + date.getDate();
  } else {
    day = date.getDate();
  }
  var outputStr = date.getFullYear() + "-" + month + "-" + day;
  console.log(outputStr);
  return outputStr;
}

const state = { 
    labels: date_arr,
    datasets: [
        {
            label: '$SGD',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 5,
            data: price_int_arr
        }
    ]
};

class Chart extends React.Component {
    render() { 
        const city = cityPicker(this.props.name);
        db.collection('flight_price_' + city).doc("2020-06-21")
          .collection('2020-05-22').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // Gets the name of the document and the price of the flight
              console.log(`${doc.id} => ${doc.get("Price")}`);
            });
          });
        const lol = getFourteenDaysAgo();
        incrementDay(lol);
        return (
            <div>
              <Line 
                data={ state }
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
