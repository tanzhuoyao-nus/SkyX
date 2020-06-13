import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import Chartdescription from '../components/chartdescription'; 
import Chartdatacards from "../components/chartdatacards"; 
function KL () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Kuala Lumpur </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"Kuala Lumpur"} />
                <br/> 
                <Chartdatacards name={"Kuala Lumpur"}/> 
                <br/> 
                <Chartdescription /> 
            </div>
    ); 
}

export default KL; 