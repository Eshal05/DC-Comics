var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

// /* GET home page. */
// //router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/comic1', function(req, res, next) {
  res.render('comic1');
});

router.get('/comic2', function(req, res, next) {
  res.render('comic2');
});

router.get('/comic3', function(req, res, next) {
  res.render('comic3');
});

router.get('/comic4', function(req, res, next) {
  res.render('comic4');
});
 
router.get('/comic5', function(req, res, next) {
  res.render('comic5');
});

module.exports = router;
