import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';

function KL () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Kuala Lumpur </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"Kuala Lumpur"} />
            </div>
    ); 
}

export default KL; 