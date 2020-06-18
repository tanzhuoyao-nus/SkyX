import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function HongKong () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Hong Kong </h1>
            {/* Chart */}
            <Chart name={"Hong Kong"} />
            <br/>
            <hr/>
            <ChartDataCards name={"Hong Kong"}/> 
        </div>
    ); 
}

export default HongKong; 