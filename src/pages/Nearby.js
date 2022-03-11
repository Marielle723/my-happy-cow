import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";

class GeoComp extends React.Component {
  render() {
    const default_longitude = 48.86951365254157;
    const default_latitude = 2.361438932499247;

    //   console.log(def_long, def_lat);

    const current_longitude = this.props.coords
      ? this.props.coords.longitude
      : default_longitude;
    const current_latitude = this.props.coords
      ? this.props.coords.longitude
      : default_latitude;

    return (
      <div className="nearby-wrapper">
        <div className="nearby-food">List of nearby vegan restaurant</div>
        <MapContainer center={[current_longitude, current_latitude]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!this.props.coords ? (
            <div className="loading">Loading</div>
          ) : (
            <Marker position={[current_longitude, current_latitude]}>
              <Popup className="marker-popup">You are here!</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoComp);

// export default Nearby;
