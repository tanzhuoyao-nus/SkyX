import React from 'react'; 
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

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
            {/* <Marker lattitude={51.5074} longitude={0.1278}> 
                <button>
                    <img src="https://www.pngguru.com/free-transparent-background-png-clipart-yfuav" />
                </button>
            </Marker> */}
            


        </ReactMapGL>
      );
    }
  }

  export default Map; 