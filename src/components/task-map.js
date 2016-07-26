import React from 'react';
import GoogleMap from 'google-map-react';

class TaskMap extends React.Component {
  render() {
    return (
      <div id="map">
        <GoogleMap
          defaultCenter={{lat: 36.964, lng: -122.015}}
          defaultZoom={8}>
        </GoogleMap>
      </div>
    );
  }
}

export default TaskMap;
