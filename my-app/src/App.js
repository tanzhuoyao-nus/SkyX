import React from 'react';
import styles from './index.css'; 

//component imports 
import Chart from './components/chart';
import Logo from './components/logo'; 
import Navbar from './components/navbar';



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