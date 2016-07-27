import React from 'react';
import Task from './task';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default col-md-5">
          <div className="panel-heading">
            <h3 className="panel-title"><input type="text" placeholder="Task List Title"/></h3>
          </div>
          <div className="panel-body">


            { this.props.task.map((taskString, index) => <Task key={index} text={taskString} />) }
            { this.props.location.map((locationString, index) => <Task key={index} text={locationString} />) }

          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
