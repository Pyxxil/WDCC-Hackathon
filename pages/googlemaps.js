import React, {Component} from "react"
import {Map, GoogleApiWrapper, InfoWindow, Marker, DirectionsRenderer, Polyline} from 'google-maps-react';
const mapStyles = {
  margin: "0 auto",
  height: '440px',
  width: "440px"
};
let oriLng = 174.770661
let oriLat = -36.8511171
let destLng = 174.7600023;
let destLat = -36.8484437;
class ShowMap extends React.Component {
  constructor(props) {
    super(props)
  }
  getDirections(destLat, destLng) {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = new window.google.maps.LatLng(oriLat, oriLng)
    const destination = new window.google.maps.LatLng(destLat, destLng);
    console.log('origin', origin.lat(), origin.lng());
    console.log('dest', destination.lat(), destination.lng());
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: "DRIVING"
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.log('status', status);
          console.error(`error fetching directions`, result);
        }
      }
    );
  }
  render() {
    return(
      <div class="map">
        <Map class="map" google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: -36.8511171, lng: 174.770661}}>
          <Marker position={{lat: oriLat, lng: oriLng }} />
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey:'AIzaSyDkebnqIrf98MzWYEb0T2T0jd13MrkQNw4'
})(ShowMap)
