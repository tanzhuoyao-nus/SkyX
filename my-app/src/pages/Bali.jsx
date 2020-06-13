import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import Chartdescription from '../components/chartdescription'
import Chartdatacards from "../components/chartdatacards"; 
function Bali () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Bali </h1>
            {/* Chart */}
            <Chart name={"Bali"} />
            <Chartdatacards name={"Bali"} />
            <Chartdescription /> 
        </div>
    ); 
}

export default Bali; 

