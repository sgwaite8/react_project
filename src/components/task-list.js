import React from 'react';
import Task from './task';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Task/>
      </div>
    );
  }
}

export default TaskList;
