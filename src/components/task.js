import React from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3> {this.props.newTask} </h3>
        <p> {this.props.newLocation} </p>
      </div>
    );
  }
}

export default Task;
