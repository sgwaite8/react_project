import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import TaskForm from './task-form';

class TaskMap extends React.Component {

  render() {
    return (
      <div className="col-md-offset-6" id="map">
        <GoogleMap
          defaultCenter={{lat: 30.2672, lng: -97.7431}}
          defaultZoom={10}>
          <Marker className="marker" lat={thisplace.geometry.location.lat()} lng={thisplace.geometry.location.lng()} text={'W'}/>
        </GoogleMap>
      </div>
    );
  }
}


export default TaskMap;
