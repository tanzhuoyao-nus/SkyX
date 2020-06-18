import React from 'react'; 
import './pages.css'; 
import HighChart from "../components/highchart"
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function London () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> Flight Prices to London </h1>
            {/* Chart */}
            <HighChart name={"London"} />
            <br/>
            <br />
            <hr/>
            <ChartDataCards name={"London"} /> 
        </div>
    ); 
}

export default London; 