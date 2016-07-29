import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';

class TaskMap extends React.Component {

  constructor(props) {
    super(props);
  }

  _onMapLoad(mapsObject){
    this.googleMap = mapsObject.map;
    this.mapsApi = mapsObject.maps;
    this.directionsService = new this.mapsApi.DirectionsService;
    this.directionsDisplay = new this.mapsApi.DirectionsRenderer({map: this.googleMap});
    this.stepDisplay = new this.mapsApi.InfoWindow;
  }

  _formatWaypoints() {
    return this.props.tasks.map((task, i) => {
      var location = new this.mapsApi.LatLng(task.latLng.lat, task.latLng.lng);
      return { location: location, stopover: true };
    });
  }

  _getDirections(waypoints){
    let startingTask = waypoints.shift();
    let endingTask = waypoints.pop();
    this.directionsService.route({
      origin: startingTask.location,
      destination: endingTask.location,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {

        this.directionsDisplay.setDirections(response);
        // var route = response.routes[0];
        // var summaryPanel = document.getElementById('directions-panel');
        // summaryPanel.innerHTML = '';
        // // For each route, display summary information.
        // for (var i = 0; i < route.legs.length; i++) {
        //   var routeSegment = i + 1;
        //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //       '</b><br>';
        //   summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        //   summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        //   summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        // }
        console.log(response.routes[0].legs);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    if (this.googleMap && this.props.tasks.length > 1) {
      var waypoints = this._formatWaypoints();
      this._getDirections(waypoints);
    }

    return (
      <div className="panel-body">
        <div className="panel panel-default col-md-offset-6" id="map">
          <GoogleMap
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={this._onMapLoad.bind(this)}
            defaultCenter={{lat: 30.2672, lng: -97.7431}}
            defaultZoom={10}>
          </GoogleMap>
        </div>
      </div>
    );
  }
}


export default TaskMap;
