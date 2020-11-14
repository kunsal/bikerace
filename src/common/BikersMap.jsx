import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const BikersMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCs8rvda2R2CEy9tVbhzimcNl9R8ec54mQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({coordinates, defaultLat, defaultLng, zoom}) => {
  
  return (
    <GoogleMap
      defaultZoom={zoom ? zoom : 11}
      defaultCenter={{ lat: defaultLat, lng: defaultLng }}
    >
      { coordinates.map(({lat, lng}, idx) => 
      <Marker 
        position={{ lat, lng }} 
        icon={{ url: 'https://img.icons8.com/material-sharp/2x/bike-path.png' }}
        key={idx}
      />)}
      
    </GoogleMap> 
  );
}

);

export default BikersMap