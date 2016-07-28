import React from 'react';

class Marker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Marker;
