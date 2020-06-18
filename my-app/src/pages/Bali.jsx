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
            <h1> Flight Prices to Bali </h1>
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

