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
                <hr></hr>
                <Chart name={"Bali"} />
                <br/> 
                <Chartdatacards/>
                <br/> 
                <Chartdescription /> 
            </div>
    ); 
}

export default Bali; 

