import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';
import Chartdescription from '../components/chartdescription'; 
import Chartdatacards from "../components/chartdatacards"; 

function London () { 
    return ( 
        <div> 
            {/* Navbar */}
            <Navbar/>
            <h1> London </h1>
            {/* Chart */}
            <Chart name={"London"} />
            <Chartdatacards name={"London"} /> 
            <Chartdescription /> 
        </div>
    ); 
}

export default London; 