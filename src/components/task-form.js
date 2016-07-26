import React from 'react';

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSearch(evt) {
    evt.preventDefault();

  }

  render() {
    return (
      <div>
        Form
      </div>
    );
  }
}

export default TaskForm;
