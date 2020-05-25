import React from 'react'; 
import styles from './pages.css'; 
import Chart from '../components/chart'; 

function Pricechart () { 
    return ( 
        <div> 
            <h1> Price Chart Page </h1>

            {/* Chart */}
            <h1 className="sections"> Chart</h1>
            <hr></hr>
            <Chart />
        </div>
    ); 
}

export default Pricechart; 