const express = require('express');
const router = express.Router();
const models = require('../models')
const Page = models.Page;
const User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/')
});

// router.post('/', function(req, res, next) {
//   res.send('got to POST /wiki/');
// });

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.post('/', function(req, res, next) {
  res.json(req.body);
  //res.redirect('/');
});

module.exports = router;
