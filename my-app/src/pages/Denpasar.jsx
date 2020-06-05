import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';

function Denpasar () { 
    return ( 
        <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Denpasar </h1>
                {/* Chart */}
                <hr></hr>
                <Chart name={"Denpasar"} />
        </div>
    ); 
}

export default Denpasar; 

