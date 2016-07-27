import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';

class TaskMap extends React.Component {
  render() {
    return (
      <div className="col-md-offset-6" id="map">
        <GoogleMap
          defaultCenter={{lat: 37.0902, lng: -95.7129}}
          defaultZoom={2}>
          <Marker className="marker" lat={30.2672} lng={-97.7431} text={'W'}/>
        </GoogleMap>
      </div>
    );
  }
}


export default TaskMap;
