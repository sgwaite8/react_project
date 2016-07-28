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
      <div className="indTask ">
        <input className="checkbox" type="checkbox" value="" /> <h3 className="task">{this.props.message}</h3>
        <p className="task">{this.props.location}</p><i onClick={ this._handleClick.bind(this) } className="fa fa-trash fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Task;
