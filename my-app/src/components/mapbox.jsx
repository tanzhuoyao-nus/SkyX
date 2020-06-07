import React, {useState} from 'react'; 
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    state = {
      viewport: {
        width: "80vw",
        height: "50vh",
        latitude: 1.3521,
        longitude: 103.8198,
        zoom: 5
      }
    };
  
    render() {
      return (
        <ReactMapGL 
          {...this.state.viewport} mapboxApiAccessToken={"pk.eyJ1IjoiYW5sZWVlIiwiYSI6ImNrYjM0MmJ1aDBoYWQyeGs2cm43bGlqdzUifQ.QsauNU7FFlsWYn-HbF2D8w"}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      );
    }
  }

  export default Map; 