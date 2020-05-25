import React from 'react';
import styles from './index.css'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

//component imports 
import Chart from './components/chart';
import Logo from './components/logo'; 
import Navbar from './components/navbar';
import Cards from './components/cards'; 
import Date from './components/date'; 


//pages imports
import Home from './pages/home'; 
import Pricecomparison from './pages/pricecomparison';
import Pricemap from './pages/pricemap';
import Pricechart from './pages/pricechart';
import Buyorder from './pages/buyorder'; 

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Logo */}
      <Logo /> 

      {/* Navbar Routing */}
      <Router> 
        
        <Switch>
          <Route path ="/" exact component={Home} /> 
          <Route path ="/pricecomparison" component={Pricecomparison} />
          <Route path ="/pricemap" component={Pricemap} />
          <Route path ="/pricechart" component={Pricechart} />
          <Route path ="/buyorder" component={Buyorder} />
        </Switch>
      </Router>  

    </div>
  );
}

export default App;