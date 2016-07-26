import React from 'react';
import 'whatwg-fetch';
import TaskForm from './task-form';
import TaskList from './task-list';
import TaskMap from './task-map';

class TaskContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // _fetchMovie(searchTerm) {
  //
  //   fetch(`//www.omdbapi.com/?t=${searchTerm}&y=&plot=short&r=json`)
  //
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((results) => {
  //       console.log(results)
  //       this.setState({
  //         movie: results
  //       })
  //     })
  //     .catch((ex) => {
  //       console.log('parsing failed', ex)
  //     })
  // }


  render() {
    return (
      <div>
        <TaskForm/>
        <TaskList/>
        <TaskMap/>
      </div>
    );
  }
}



export default TaskContainer;
