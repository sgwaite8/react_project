import React from 'react';
import 'whatwg-fetch';
import TaskForm from './task-form';
import TaskList from './task-list';
import Firebase from 'firebase';
import _ from 'underscore';

class TaskContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { tasks: []};
  }

  componentWillMount() {
    let config = {
      apiKey: "AIzaSyB0FGjzZF8JsBu75GGFgQwabrBBrSzfz0s",
      authDomain: "wdi6-group-project-3.firebaseapp.com",
      databaseURL: "https://wdi6-group-project-3.firebaseio.com",
      storageBucket: "",
    };
    let firebaseApp = firebase.initializeApp(config);
    let firebaseDb = firebaseApp.database();

    this.firebaseRef = firebaseDb.ref("tasks");
    this.firebaseRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      this.setState({ tasks: _.values( snapshot.val() ) });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  _addTask(message, location){
    let newTask = {
      message: message,
      location: location
    }
    this.setState({tasks: this.state.tasks.concat(newTask) });
    this.firebaseRef.push(newTask);
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this._addTask.bind(this)} />
        {/*<TaskForm addTask={this._addTask.bind(this)} addLocation={this._addLocation.bind(this) } />*/}
        <TaskList tasks={this.state.tasks}  />
      </div>
    );
  }
}



export default TaskContainer;
