import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';

function Bali () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Bali </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"Bali"} />
                
            </div>
    ); 
}

export default Bali; 

