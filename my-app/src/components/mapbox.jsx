import React from 'react'; 
import {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';


class Map extends Component {
    state = {
      viewport: {
        width: "100vw",
        height: "60vh",
        latitude: 1.3521,
        longitude: 103.8198,
        zoom: 5
      }
    };
  
    render() {
      return (
        <ReactMapGL 
          {...this.state.viewport} 
          mapboxApiAccessToken={"pk.eyJ1IjoiYW5sZWVlIiwiYSI6ImNrYjM0MmJ1aDBoYWQyeGs2cm43bGlqdzUifQ.QsauNU7FFlsWYn-HbF2D8w"}
          mapStyle="mapbox://styles/anleee/ckb4n5bon1pct1is727fqbnpl"
          onViewportChange={(viewport) => this.setState({viewport})}
        >
            {/* Marker */}
            {/* Tokyo */}
            <Marker latitude={35.6894} longitude={139.6917}> 
                <button className="marker-btn">
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker"/>
                </button>
            </Marker>
            {/* Hong Kong */}
            <Marker latitude={22.3193} longitude={114.1694}> 
                <button className="marker-btn">
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker"/>
                </button>
            </Marker>
            {/* Bali */}
            <Marker latitude={-8.3405} longitude={115.0920}> 
                <button className="marker-btn">
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker"/>
                </button>
            </Marker>
            
            {/* KL */}
            <Marker latitude={3.1390} longitude={101.6869}> 
                <button className="marker-btn">
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker"/>
                </button>
            </Marker>

            {/*  */}
            <Marker latitude={51.5074} longitude={0.1278}> 
                <button className="marker-btn">
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker"/>
                </button>
            </Marker>
            


        </ReactMapGL>
      );
    }
  }

  export default Map; 