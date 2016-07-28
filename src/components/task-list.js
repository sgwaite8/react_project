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


            { this.props.tasks.map((task, index) => <Task taskId={task.id} key={index} {...task} />) }


          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
