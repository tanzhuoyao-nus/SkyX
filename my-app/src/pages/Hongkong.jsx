import React from 'react'; 
import './pages.css'; 
import HighChart from "../components/highchart"
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function HongKong () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <div id="chartHeader">
                <h1 id="chartHeader2"> Flight Prices to Hong Kong </h1>
            </div>
            {/* Chart */}
            <HighChart name={"Hong Kong"} />
            <br/>
            <br/>
            <hr/>
            <ChartDataCards name={"Hong Kong"}/> 
        </div>
    ); 
}

export default HongKong; 