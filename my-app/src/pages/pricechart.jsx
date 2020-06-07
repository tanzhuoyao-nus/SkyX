import React from 'react'; 
import './pages.css'; 

//react-router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

//pages 
import Hongkong from './Hongkong'; 
import London from './London'; 
import Tokyo from './Tokyo'; 
import KualaLumpur from './KL'; 
import Bali from './Bali'; 
import Pricecharthome from './pricecharthome'; 

class Pricechart extends React.Component { 
    render() { 
        return <Router>
            <Switch>
            <Route exact path = "/pricechart" component ={Pricecharthome}/>
            <Route exact path = "/pricechart/hongkong" component={Hongkong} /> 
            <Route exact path = "/pricechart/london" component={London} /> 
            <Route exact path = "/pricechart/kl" component={KualaLumpur} /> 
            <Route exact path = "/pricechart/tokyo" component={Tokyo} /> 
            <Route exact path = "/pricechart/denpasar" component={Bali} /> 
            </Switch>
        </Router>
    }
}

export default Pricechart; 