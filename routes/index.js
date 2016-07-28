var express = require('express');
var router = express.Router();
var Task = require('../models/task')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var text = req.body.text;
  var newTask = Task({text: text});

  newTask.save(function(err, task){
    if (err) console.log(err);
    res.json(task);
  })
});

router.delete('/:id', function(req, res,next){
  Task.findByIdAndRemove(req.params.id, function(err, task){
    if (err) console.log(err);
    res.json(task);
  });
})

module.exports = router;
