import React from 'react';


class TaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latLng: null
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
      let coords = { lat: thisplace.geometry.location.lat(), lng: thisplace.geometry.location.lng() };
      this.setState({ latLng: coords });
    }.bind(this));
  }

  _handleSubmit(event){
    event.preventDefault();

    let newTask = this.refs.newTask.value;
    let newLocation = this.refs.newLocation.value;
    let newLatLng = this.state.latLng;

    if (newTask && newLocation) {
      this.props.addTask(newTask, newLocation, newLatLng);
      this.setState({
        latLng: null
      });
      this.refs.newTask.value = '';
      this.refs.newLocation.value = '';
    }
    else {
      alert("You need both a task and a location.")
    }
  }

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
      </div>
    );
  }
}

export default TaskForm;
