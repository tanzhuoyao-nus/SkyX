import React from 'react'; 
import './pages.css'; 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 
import HighChart from "../components/highchart"

function KL () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Flight Prices to Kuala Lumpur </h1>
            {/* Chart */}
            <HighChart name={"Kuala Lumpur"} />
            <br/>
            <br />
            <hr/>
            <ChartDataCards name={"Kuala Lumpur"}/> 
        </div>
    ); 
}

export default KL; 