import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import Chartdescription from '../components/chartdescription'; 
function Tokyo () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Tokyo </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"Tokyo"} />
                <Chartdescription /> 
            </div>
    ); 
}

export default Tokyo; 