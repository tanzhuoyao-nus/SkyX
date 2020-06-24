import React from 'react'; 
import './pages.css'; 
import HighChart from "../components/highchart"
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function Tokyo () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <div id="chartHeader">
                <h1 id="chartHeader2"> Flight Prices to Tokyo </h1>
            </div>
            {/* Chart */}
            <HighChart name={"Tokyo"} />
            <br/>
            <br/>
            <hr/>
            <ChartDataCards name={"Tokyo"} /> 
        </div>
    ); 
}

export default Tokyo; 