import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function KL () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Kuala Lumpur </h1>
            {/* Chart */}
            <Chart name={"Kuala Lumpur"} />
            <br/>
            <hr/>
            <ChartDataCards name={"Kuala Lumpur"}/> 
        </div>
    ); 
}

export default KL; 