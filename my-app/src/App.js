import React from 'react';
import styles from './index.css'; 

//component imports 
import Chart from './components/Chart';
import Logo from './components/Logo'; 
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Logo />   

      <h1>Welcome to SkyX</h1>
      <input id="form" placeholder="Your name here"></input>


      <Chart /> 









      
    </div>
  );
}

export default App;