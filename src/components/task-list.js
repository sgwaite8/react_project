import React from 'react';
import Task from './task';
import _ from 'underscore';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-list">
        <div className="panel panel-default col-md-5">
          <div className="panel-heading">
            <h3 className="panel-title"><input type="text" placeholder="List Title"/></h3>
          </div>
          <div className="panel-body">
            { _.map(this.props.tasks, (task, id) => <Task key={id} message={task.message} location={task.location} id={id} firebaseRef={this.props.firebaseRef} />) }
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
