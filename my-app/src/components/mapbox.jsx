import React, {useState, useEffect} from 'react'; 
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as countryMarker from "./countries.json"; 
import { db } from './firebase'; 
import './components.css'; 

async function getAveragePrice(city) {
  const document = await db.collection('flight_price_' + city).doc("Prices").get();
  const avg_prices = await document.get("All Time Average"); 
  return avg_prices;
}

function Map () {

  const [viewport, setViewport] = useState({
    latitude: 1.3521,
    longitude: 103.8198,
    width: "100vw",
    height: "60vh",
    zoom: 5
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
    <ReactMapGL 
      {...viewport} 
      mapboxApiAccessToken={"pk.eyJ1IjoiYW5sZWVlIiwiYSI6ImNrYjM0MmJ1aDBoYWQyeGs2cm43bGlqdzUifQ.QsauNU7FFlsWYn-HbF2D8w"}
      mapStyle="mapbox://styles/anleee/ckb4n5bon1pct1is727fqbnpl"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    > 

    {countryMarker.features.map(country => (
      <Marker
        latitude={country.geometry.coordinates[0]}
        longitude={country.geometry.coordinates[1]}
      >
        <button
          className="marker-btn"
          onClick={e => {
            e.preventDefault();
            setSelectedCountry(country);
          }}
        >
          <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Map Marker Icon" />
        </button>
      </Marker>
    ))}

    {selectedCountry ? (
      <Popup className="popup"
        latitude={selectedCountry.geometry.coordinates[0]}
        longitude={selectedCountry.geometry.coordinates[1]}
        onClose={() => {
          setSelectedCountry(null);
        }}
      >
        <div>
          <h4>{selectedCountry.properties.NAME}</h4>
          <h6>{parseInt(getAveragePrice(selectedCountry.properties.CODE))}</h6>
          {console.log(getAveragePrice(selectedCountry.properties.CODE))}
        </div>
      </Popup>
    ) : null}

    </ReactMapGL>
    </div>
  );
}
}

export default Map; 