import React from 'react';
import 'whatwg-fetch';
import TaskForm from './task-form';
import TaskList from './task-list';
import TaskMap from './task-map';
import Firebase from 'firebase';
import _ from 'underscore';
// import _ from 'underscore';

class TaskContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { tasks: {} };
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
      this.setState({ tasks: snapshot.val() });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  _addTask(message, location, latLng){
    let newTask = {
      message: message,
      location: location,
      latLng: latLng
    }

    this.firebaseRef.push(newTask);
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this._addTask.bind(this)} />
        <TaskMap tasks={_.values(this.state.tasks)} />
        <TaskList tasks={this.state.tasks} firebaseRef={this.firebaseRef} />
      </div>
    );
  }
}



export default TaskContainer;
