import React from 'react'; 
import './pages.css'; 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 
import HighChart from "../components/highchart"

function Bali () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <div id="chartHeader">
                <h1 id="chartHeader2"> Flight Prices to Bali </h1>
            </div>
            {/* Chart */}
            <HighChart name={"Bali"}/>
            <br/>
            <br/>
            <hr/>
            <ChartDataCards name={"Bali"} />
        </div>
    ); 
}

export default Bali; 

