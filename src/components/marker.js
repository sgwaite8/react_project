import React from 'react';

class Marker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.text }
      </div>
    );
  }
}

export default Marker;
