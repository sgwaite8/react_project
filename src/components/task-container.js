import React from 'react';
import 'whatwg-fetch';
import TaskForm from './task-form';
import TaskList from './task-list';
import TaskMap from './task-map';

class TaskContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { task: [], location: [] };
  }
  // componentDidMount(){
  //   $.ajax({
  //     method: 'GET',
  //     url: '/',
  //     dataType: 'json'
  //   })
  //   .done(function(data){
  //     this.setState({ task: data})
  //   }.bind(this))
  // }
  _addTask(newTask){
    let currentTasks = this.state.tasks;
    debugger
    currentTasks.push(newTask);
    this.setState({tasks: currentTasks});
  }
  _addLocation(newLocation){
    let currentLocations = this.state.locations;
    currentLocations.push(newLocation);
    this.setState({locations: currentLocations});
  }
  render() {
    return (
      <div>
        <TaskForm addTask={this._addTask.bind(this)} addLocation={this._addLocation.bind(this) } />
        <TaskList tasks={this.state.tasks} locations={this.state.locations} />
        <TaskMap mlat="55.0000" mlong="-113.0000"/>
      </div>
    );
  }
}



export default TaskContainer;
