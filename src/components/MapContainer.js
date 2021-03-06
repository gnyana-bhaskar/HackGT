import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    };

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAWOuf6DHera91fDh-EvqdOuO77TlleUBM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  );
}
export default MapContainer;