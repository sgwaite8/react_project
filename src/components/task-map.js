import React from 'react';
import GoogleMap from 'google-map-react';

class TaskMap extends React.Component {
  render() {
    return (
      <div className="col-md-offset-6" id="map">
        <GoogleMap
          defaultCenter={{lat: 30.2672, lng: -97.7431}}
          defaultZoom={8}>
        </GoogleMap>
      </div>
    );
  }
}


export default TaskMap;
