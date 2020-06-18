import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function Tokyo () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Tokyo </h1>
            {/* Chart */}
            <Chart name={"Tokyo"} />
            <br/>
            <hr/>
            <ChartDataCards name={"Tokyo"} /> 
        </div>
    ); 
}

export default Tokyo; 