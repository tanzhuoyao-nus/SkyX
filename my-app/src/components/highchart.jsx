import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import HighStock from "highcharts/highstock";
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
  
  async function getFirebaseData(city) {
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
      price_arr[x] = [Date.parse(date), parseFloat(avg_prices[date].toFixed(2))];
      highest_arr[x] = [Date.parse(date), high_prices[date]];
      lowest_arr[x] = [Date.parse(date), low_prices[date]];
      date = incrementDay(date);
    }
    var output_arr = [];
    output_arr[0] = price_arr;
    output_arr[1] = highest_arr;
    output_arr[2] = lowest_arr;
    return output_arr;
  }
  
  class HighChart extends React.Component {
    constructor() {
        super();
        this.state = { 
            average_prices: '',
            highest_prices: '',
            lowest_prices: '',
            options: ''
        }
    }

    async componentDidMount() {
        const city = cityPicker(this.props.name);
        var final_prices = await getFirebaseData(city).catch(err => console.log("Oops error"));
        console.log(final_prices);
        this.setState({average_prices: final_prices[0]});
        this.setState({highest_prices: final_prices[1]});
        this.setState({lowest_prices: final_prices[2]});
        this.setState({options: {
            chart: {
                height: 500,
                type: "line"
            },
            rangeSelector: {
                selected: 1
            },
            xAxis: {
                type: 'datetime',
            },
            width: 40,
            colors: ["#141B45", "#E1A18E", "#cae7c1"], 
            series: [{
                name: 'Average Price',
                data: final_prices[0],
                marker: {
                    enabled: true,
                    radius: 3
                },
                shadow: true,
                tooltip: {
                    valuePrefix: "$",
                    valueDecimals: 2
                }
                }, {
                name: 'Highest Price',
                data: final_prices[1],
                marker: {
                    enabled: true,
                    radius: 3
                },
                shadow: true,
                tooltip: {
                    valuePrefix: "$",
                    valueDecimals: 2
                }
                }, {
                name: 'Lowest Price',
                data: final_prices[2],
                marker: {
                    enabled: true,
                    radius: 3
                },
                shadow: true,
                tooltip: {
                    valuePrefix: "$",
                    valueDecimals: 2
                }
                }  
            ]
          }})
    }

    
      render() {    
        return (
            <div>
                <HighchartsReact highcharts={HighStock} constructorType={'stockChart'} options={this.state.options} />
            </div>
        );
      }
  }
   
export default HighChart;
  


        


