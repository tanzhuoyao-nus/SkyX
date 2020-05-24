import React from 'react';
import styles from './index.css'; 

//component imports 
import Chart from './components/chart';
import Logo from './components/logo'; 
import Navbar from './components/navbar';
import Cards from './components/cards'; 
import Date from './components/date'; 
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      {/* Logo */}
      <Logo /> 

      
      {/* Cards */}
      <Cards />

      {/* Departure and Arrival */}
      <h1 className="sections"> User Input </h1>
      <hr></hr>
      <div>
      <p>Departure </p>
      <Date /> 
      </div>
      <div>
      <p>Arrival </p>
      <Date /> 
      </div> 
      

      {/* Chart */}
      <h1 className="sections"> Chart</h1>
      <hr></hr>
      <Chart />
    

    </div>
  );
}

export default App;