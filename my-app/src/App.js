import React from 'react';
import styles from './index.css'; 

//component imports 
import Chart from './components/chart';
import Logo from './components/logo'; 
import Navbar from './components/navbar';
import Cards from './components/cards'; 

function App() {
  return (
    <div>
      <Navbar/>
      <Logo /> 
      <Cards />
      <Chart />
    

    </div>
  );
}

export default App;