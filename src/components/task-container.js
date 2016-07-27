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
    let currentTasks = this.state.task;
    currentTasks.push(newTask);
    this.setState({task: currentTasks});
    console.log({task: currentTasks});
    debugger
  }
  _addLocation(newLocation){
    let currentLocations = this.state.location;
    currentLocations.push(newLocation);
    debugger
    this.setState({location: currentLocations});
  }
  render() {
    return (
      <div>
        <TaskForm addTask={this._addTask.bind(this)} addLocation={this._addLocation.bind(this) } />
        <TaskList task={this.state.task} location={this.state.location} />
        <TaskMap />
      </div>
    );
  }
}



export default TaskContainer;
