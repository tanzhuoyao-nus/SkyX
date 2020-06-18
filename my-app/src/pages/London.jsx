import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import ChartDataCards from "../components/chartdatacards"; 

function London () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> London </h1>
            {/* Chart */}
            <Chart name={"London"} />
            <br/>
            <hr/>
            <ChartDataCards name={"London"} /> 
        </div>
    ); 
}

export default London; 