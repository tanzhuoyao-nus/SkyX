import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import PriceChartPicker from '../components/pricechartpicker'; 
class Pricecharthome extends React.Component { 
        render() {
            return ( 
                <div> 
                    
                    <Navbar/>
                    <h1> Price Chart  </h1>
                    <hr></hr>

                    <PriceChartPicker/>
                </div>
            ); 
        }
    }

export default Pricecharthome; 