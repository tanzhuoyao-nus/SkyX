import React from 'react';
import { Line } from 'react-chartjs-2';
import flight_data from '../datasets/2020-06-17-TYO.json';
import { db } from './firebase';
import '../pages/pricechart'

var date_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// var price_arr = [];
// var date_ = getNextMonth();
var price_int_arr = [123,453,123,233,123,231,453,123,234,234,342,134,234,234];

// var price_int_arr = price_arr.map(x =>parseInt(x.slice(1)));

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

async function getFirebaseData(date_, city, date_arr, price_arr) {
  var index = 0;
  for (var x = 0; x < 14; x++) {
    date_arr[x] = date_;
    db.collection('flight_price_' + city).doc(date_)
    .collection('2020-05-25').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         // Gets the name of the document and the price of the flight
        price_arr[index] = `${doc.get("Price")}`;
        index++;
      });
    });
    date_ = incrementDay(date_);
  }
}

class Chart extends React.Component {
    render() { 
        const city = cityPicker(this.props.name);
        var date_arr = [];
        var price_arr = [];
        var date_ = getNextMonth();
        getFirebaseData(date_, city, date_arr, price_arr);
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
                  data: price_arr
              }
          ]
      };
      
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
