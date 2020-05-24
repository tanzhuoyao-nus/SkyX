import React from 'react';
import styles from './index.css'; 

//component imports 
import Chart from './components/Chart';
import Logo from './components/Logo'; 
import Navbar from './components/Navbar';
import Cards from './components/Cards'; 

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