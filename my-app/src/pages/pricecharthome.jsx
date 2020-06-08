import React from 'react'; 
import './pages.css'; 

//component imports 
import Navbar from '../components/navbar';
import PriceChartPicker from '../components/pricechartpicker'; 
import { Container } from '@material-ui/core';
class Pricecharthome extends React.Component { 
        render() {
            return ( 
                <div> 
                    
                    <Navbar/>
                    <h1> Price Chart  </h1>
                    <hr></hr>
                    <Container className="featuresExplainer">Price Charts on SkyX serves as the tracking engine for users to automatically track flight prices. Besides historical data, it also has future flight prices for any destination. 
                    </Container>
                    <PriceChartPicker/>
                </div>
            ); 
        }
    }

export default Pricecharthome; 