import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as countryMarker from "./countries.json"; 
import { db } from './firebase'; 
import 'mapbox-gl/dist/mapbox-gl.css'; 
import "./components.css"; 

// Get Average Price of City 
async function MonthlyAverage(city) {
  const document = await db.collection('flight_price_' + city).doc("Prices").get();
  const monthly_average = await document.get("Monthly Average"); 
  return monthly_average;
}

async function AllTimeAverage(city) {
    const document = await db.collection('flight_price_' + city).doc("Prices").get();
    const all_time_average = await document.get("All Time Average"); 
    return all_time_average;
  }

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 1.290270,
                longitude: 103.851959,
                width: "100vw",
                height: "60vh",
                zoom: 10
              }, 
            selectedCountry: null, 

        };
    }

    // Pop-up Event Listener 
    componentDidMount () { 
        const listener = e => {
            if (e.key === "Escape") {
                this.setState({
                    selectedCountry: null
                });
            } 
        }; 

        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }

    render () {
        return (
        <div>
        <ReactMapGL 
        {...this.state.viewport} 
        mapboxApiAccessToken={"pk.eyJ1IjoiYW5sZWVlIiwiYSI6ImNrYjM0MmJ1aDBoYWQyeGs2cm43bGlqdzUifQ.QsauNU7FFlsWYn-HbF2D8w"}
        mapStyle="mapbox://styles/anleee/ckb4n5bon1pct1is727fqbnpl"
        onViewportChange={change => {
            this.setState({ 
                viewport: change
            })
        }}
        > 

        {countryMarker.features.map(country => (
        <Marker
            wait={5000}
            key={country.properties.COUNTRYID}
            className="marker"
            latitude={country.geometry.coordinates[0]}
            longitude={country.geometry.coordinates[1]}
            offset={[0, -50/2]}
        >
            <button
            position="absolute"
            className="marker-btn"
            onClick={e => {
                e.preventDefault();
                this.setState ({ 
                    selectedCountry: country
                })
            }}
            >
            <img src={
                parseFloat(MonthlyAverage(country)) < parseFloat(AllTimeAverage(country))
                ?  parseFloat(AllTimeAverage(country)) - parseFloat(MonthlyAverage(country)) > 0.2 * parseFloat(AllTimeAverage(country))
                    ? "https://freesvg.org/img/squat-marker-green.png"
                    : "https://freesvg.org/img/squat-marker-orange.png"
                : "https://freesvg.org/img/squat-marker-red.png"
                }
                alt="Map Marker Icon" />
            </button>
        </Marker>
        ))}

        {this.state.selectedCountry ? (
        <Popup className="popup"
            latitude={this.state.selectedCountry.geometry.coordinates[0]}
            longitude={this.state.selectedCountry.geometry.coordinates[1]}
            onClose={() => {
                this.setState({ 
                    selectedCountry: null
                })
                }
            }
        >
            <div>
            <h4>{this.state.selectedCountry.properties.NAME}</h4>
            <h6>"{parseInt(MonthlyAverage(this.state.selectedCountry.properties.CODE))}"</h6>
            {console.log(MonthlyAverage(this.state.selectedCountry.properties.CODE))}
            {console.log(AllTimeAverage(this.state.selectedCountry.properties.CODE))}
            </div>
        </Popup>
        ) : null}

        </ReactMapGL>
        </div>
        );
    }
}

ReactDOM.render(<Map />, document.getElementById('root')); 

export default Map; 