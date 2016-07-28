import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class TaskMap extends React.Component {


  render() {
    return (
      <div className="col-md-offset-6" id="map">
        <GoogleMap
          defaultCenter={{lat: 30.2672, lng: -97.7431}}
          defaultZoom={10}>
          {this.props.coordinates.map((coordinate, i) => { return (<Marker key={i} className="marker" {...coordinate} text={'W'}/>); }) }
        </GoogleMap>
      </div>
    );
  }
}


export default TaskMap;
