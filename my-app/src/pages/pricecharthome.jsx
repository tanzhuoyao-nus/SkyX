import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';

class Pricecharthome extends React.Component { 
        render() {
            return ( 
                <div> 
                    {/* Navbar */}
                    <Navbar/>
                    <h1> Price Chart Page </h1>
                    {/* Chart */}
                    <hr></hr>
                    <a className="menu__link" href="/pricechart/denpasar">Denpasar</a><br/> 
                    <a className="menu__link" href="/pricechart/hongkong">Hongkong</a><br/>
                    <a className="menu__link" href="/pricechart/kl">KL</a><br/>
                    <a className="menu__link" href="/pricechart/london">London</a><br/>
                    <a className="menu__link" href="/pricechart/tokyo">Tokyo</a>
                </div>
            ); 
        }
    }

export default Pricecharthome; 