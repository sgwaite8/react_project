import React from 'react';
import TaskMap from './task-map';


class TaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coordinates: []
    }
  }

  componentDidMount() {
    this._getLatLng();
  }

  _getLatLng() {
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'us'}};
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var thisplace = autocomplete.getPlace();
      let coords = {
        lat: thisplace.geometry.location.lat(),
        lng: thisplace.geometry.location.lng()
      }
      this.setState({ coordinates: this.state.coordinates.concat(coords) })
    }.bind(this));
  }

  _handleSubmit(event){
    event.preventDefault();
    let newTask = this.refs.newTask.value;
    let newLocation = this.refs.newLocation.value;
    this.props.addTask(newTask, newLocation);
    // this.props.addLocation(newLocation);
    this.refs.newTask.value = '';
    // this.refs.newLocation.value = '';
  }

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
                <input id="searchTextField" ref="newLocation" type="text" placeholder="Task Location"/>
              </div>
              <div>
                <input type="submit" value="Enter New Task"/>
              </div>
            </form>
          </div>
        </div>
        <TaskMap latLng={this._getLatLng.bind(this)}/>
      </div>
    );
  }
}

export default TaskForm;
