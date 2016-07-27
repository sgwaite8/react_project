var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  text: {type: String, required: true},
  location: {type: String, required: true}
});

var Task = mongoose.model('Item', taskSchema);

module.exports = Task;
