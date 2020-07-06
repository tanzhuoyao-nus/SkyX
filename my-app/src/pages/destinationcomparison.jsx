import React from 'react'; 
import './pages.css'; 
import Navbar from '../components/navbar';
import London from '../destinations/London';
import Tokyo from '../destinations/Tokyo';
import KualaLumpur from '../destinations/KualaLumpur';
import Bali from '../destinations/Bali';
import HongKong from '../destinations/HongKong';

class Destinationcomparison extends React.Component { 
    state = {
        firstSelected : '',
        secondSelected : ''
    }
    render() {
        console.log(this.state.firstSelected);
        return ( 
            <div> 
                <Navbar /> 
                <h1> Destination Comparison </h1>
                <hr/>
                <div id="comparisonTable">
                    <div className="comparison">
                        {this.renderFirstCardSelection()}
                        {this.renderSelectedCard(this.state.firstSelected)}
                    </div>
                    <div className="comparison">
                        <h1>VS</h1>
                    </div>
                    <div className="comparison">
                        {this.renderSecondCardSelection()}
                        {this.renderSelectedCard(this.state.secondSelected)}
                    </div>
                </div>
            </div>
        );
    }

    renderFirstCardSelection() {
        return(
            <div className="form-group top-margin-small">
                <label className="card-selector-label">Select Destination</label>
                <select className="card-selector form-control" onChange={(e) => {this.setState({firstSelected: e.target.value})}}>
                    <option>Bali</option>
                    <option>Hong Kong</option>
                    <option>Kuala Lumpur</option>
                    <option>London</option>
                    <option>Tokyo</option>
                </select>
            </div>
        );
    }

    renderSecondCardSelection() {
        return(
            <div className="form-group top-margin-small">
                <label className="card-selector-label">Select Destination</label>
                <select className="card-selector form-control" onChange={(e) => {this.setState({secondSelected: e.target.value})}}>
                    <option>Bali</option>
                    <option>Hong Kong</option>
                    <option>Kuala Lumpur</option>
                    <option>London</option>
                    <option>Tokyo</option>
                </select>
            </div>
        );
    }

    renderSelectedCard(selected) {
        if (selected === "London") {
            return(<London />);
        } else if (selected === "Tokyo") {
            return(<Tokyo />);
        } else if (selected === "Hong Kong") {
            return(<HongKong />);
        } else if (selected === "Bali") {
            return(<Bali />);
        } else if (selected === "Kuala Lumpur") {
            return(<KualaLumpur />);
        } else {
            return(
                <div>
                    <h1>NOT SELECTED</h1>
                </div>
            )
        }
    }
}


export default Destinationcomparison; 