import React from 'react';
import Firebase from 'firebase';

class Task extends React.Component {

  constructor(props) {
    super(props);
  }
  _handleClick(){
    var confirmed = confirm("Are you sure?");
    if (confirmed){
      let firebaseRef = this.props.firebaseRef.child( this.props.id );
      firebaseRef.remove();
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
