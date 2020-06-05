import React from 'react'; 
import './pages.css'; 
import Chart from '../components/chart'; 

//component imports 
import Navbar from '../components/navbar';


class Pricechart extends React.Component { 
    render() {
        return ( 
            <div> 
                {/* Navbar */}
                <Navbar/>
                <h1> Price Chart Page </h1>
                {/* Chart */}
                <hr></hr>
                <a href="https://google.com">Denpasar</a><br/> 
                <a href="./Hongkong.jsx">Hongkong</a><br/>
                <a href="./KL">KL</a><br/>
                <a href="./London">London</a><br/>
                <a href="./Tokyo">Tokyo</a>

                <Chart name={"Tokyo"} />
                <Chart name={"Denpasar"} />
                <Chart name={"London"} />
                <Chart name={"Hong Kong"} />  
                <Chart name={"Kuala Lumpur"} />
            </div>
        ); 
    }
}

export default Pricechart; 