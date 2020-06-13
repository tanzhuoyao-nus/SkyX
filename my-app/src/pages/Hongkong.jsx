import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import Chartdescription from "../components/chartdescription"
import Chartdatacards from "../components/chartdatacards"; 

function HongKong () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Hong Kong </h1>
            {/* Chart */}
            <Chart name={"Hong Kong"} />
            <Chartdatacards name={"Hong Kong"}/> 
            <Chartdescription />
        </div>
    ); 
}

export default HongKong; 