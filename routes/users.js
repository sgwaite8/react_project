var express = require('express');
var router = express.Router();
var authWall = require('../lib/auth_wall');

var User = require('../models/user');

/* GET home page. */
router.get('/', authWall, function(req, res, next) {
  res.send("Welcome back, " + req.user.email);
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Express' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err, user) {
    // Handle save error
    if (err) return next(err);
    res.redirect('/sessions/new');
  });
});

module.exports = router;
