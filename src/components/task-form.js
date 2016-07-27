import React from 'react';

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
  }

  _initialize() {
    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input);
    debugger
    autocomplete.bindTo('bounds', map);
  }
  // google.maps.event.addDomListener(window, 'load', initialize);


  _handleSubmit(event){
    event.preventDefault();
    let newTask = this.refs.newTask.value;
    let newLocation = this.refs.newLocation.value;
    this.props.addTask(newTask);
    this.props.addLocation(newLocation);

  // _handleSubmit(evt) {
  //   evt.preventDefault();

  //   let newTask = this.refs.newTask.value;
  //   let newLocation = this.refs.newLocation.value;
    // $.ajax({
    //   url: '/',
    //   method: 'POST',
    //   data: { text: newTask, location: newLocation },
    //   dataType: 'json'
    // })
    // .done(function(data){
    //   console.log(data);
    //   this.props.addTask(data);
    //   this.refs.newTask.value = '';
    //   this.refs.newLocation.value = '';
    // }.bind(this))
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Input New Task</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this._handleSubmit.bind(this)} >
              <div>
                <label>Task:</label>
                <input ref="newTask" type="text" placeholder="New Task"/>
              </div>
              <div>
                <label>Task Location:</label>
                <input onKeyUp={this._initialize} id="searchTextField" ref="newLocation" type="text" placeholder="Task Location"/>
              </div>
              <div>
                <input  type="submit" value="Enter New Task"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
