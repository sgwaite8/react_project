import React from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3> {this.props.message} </h3>
        <p> {this.props.location} </p>
      </div>
    );
  }
}

export default Task;
