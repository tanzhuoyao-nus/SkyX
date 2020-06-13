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
                <hr></hr>
                <Chart name={"London"} />
                <br/> 
                <Chartdatacards name={"London"} /> 
                <br/> 
                <Chartdescription /> 
            </div>
    ); 
}

export default London; 