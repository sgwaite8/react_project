import React from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
  }
  _handleClick(){
    var confirmed = confirm("Are you sure?");
    if (confirmed){
      $.ajax({
      method: 'DELETE',
      url: '/' + this.props.taskId,
      dataType: 'json'
    })
      .done(function(data){
        this.setState({display: false});
      }.bind(this));
    }
  }
  render() {
    return (
      <div>
        <input type="checkbox" value=""  /><h3>{this.props.message}</h3>
      <p>{this.props.location}</p><i onClick={ this._handleClick.bind(this) } className="fa fa-trash" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Task;
