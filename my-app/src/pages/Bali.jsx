import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 
function Bali () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Bali </h1>
            {/* Chart */}
            <Chart name={"Bali"} />
            <br/>
            <hr/>
            <ChartDataCards name={"Bali"} />
        </div>
    ); 
}

export default Bali; 

