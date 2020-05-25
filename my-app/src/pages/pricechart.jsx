import React from 'react'; 
import styles from './pages.css'; 
import Chart from '../components/chart'; 

//component imports 

import Navbar from '../components/navbar';
import Cards from '../components/cards'; 
import Date from '../components/date'; 

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