import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class TaskMap extends React.Component {

  constructor(props) {
    super(props);

  }

  _onMapLoad(mapsObject){
    this.googleMap = mapsObject.map;
    this.directionsService = new mapsObject.maps.DirectionsService;
    this.directionsDisplay = new mapsObject.maps.DirectionsRenderer({map: this.googleMap});
    this.stepDisplay = new mapsObject.maps.InfoWindow;
  }

  _getDirections(){

  }


  render() {
    return (
      <div className="col-md-offset-6" id="map">
        <input type="submit" value="Get a Route"/>
        <GoogleMap
          onGoogleApiLoaded={this._onMapLoad.bind(this)}
          defaultCenter={{lat: 30.2672, lng: -97.7431}}
          defaultZoom={10}>
          {this.props.coordinates.map((coordinate, i) => { return (<Marker key={i} className="marker" {...coordinate} text={''} />); }) }
        </GoogleMap>
      </div>
    );
  }
}


export default TaskMap;
