import React from 'react';
import '../index.css'; 

//component imports 
import Logo from '../components/logo'; 
import Navbar from '../components/navbar';
import Cards from '../components/cards'; 
import Date from '../components/date'; 
import Features from '../components/features'; 

function Home() {
  return (
    <div>

    {/* Navbar */}
    <Navbar />

    {/* Logo */}
    <Logo /> 
    
    <h2 text-align="center"> Welcome to SkyX</h2>
    {/* Recommendations */}
    <Cards />

    <h1 className="sections"> Features</h1>
    <hr></hr>
    <Features /> 
    
    </div>
  );
}

export default Home;