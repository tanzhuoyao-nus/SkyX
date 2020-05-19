import React from 'react';
import { Line } from 'react-chartjs-2';
import flight_data from '../datasets/2020-06-17-TYO.json';

var date_arr = [];
var price_arr = [];
for (var x = 0; x < 14; x++) {
    const { Date, Price } = flight_data[x];
    date_arr[x] = Date;
    price_arr[x] = Price;
}
var price_int_arr = price_arr.map(x =>parseInt(x.slice(1)));

const state = { 
    labels: date_arr,
    datasets: [
        {
            label: '$SGD',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: price_int_arr
        }
    ]
}

class Chart extends React.Component {
    render() { 
        return (
            <div>
              <Line
                data={ state }
                options={{
                  title:{
                    display:true,
                    text:'Flight prices to Tokyo',
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