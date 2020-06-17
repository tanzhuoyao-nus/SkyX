import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDescription from '../components/chartdescription'
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
            <ChartDescription /> 
        </div>
    ); 
}

export default Bali; 

