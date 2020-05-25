import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 

import Navbar from '../components/navbar';

function Pricechart () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>

            <h1> Price Chart Page </h1>

            {/* Chart */}
            <h1 className="sections"> Chart</h1>
            <hr></hr>
            <Chart />
        </div>
    ); 
}

export default Pricechart; 