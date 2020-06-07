import React from 'react'; 
import'./pages.css'; 
import Navbar from '../components/navbar';
import Map from '../components/mapbox'; 
function Pricemap () { 
    return ( 
        <div> 
            <Navbar /> 
            <h1> Price Map </h1>
            <hr/>
            <br/>
            <Map />
        </div>
    ); 
}

export default Pricemap; 