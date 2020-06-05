import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';

function London () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> London </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"London"} />
            </div>
    ); 
}

export default London; 