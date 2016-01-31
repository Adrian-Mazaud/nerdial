var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nerdial Inspiration', content: 'login', page: 'login', burger : false});
});

/* GET around page. */
router.get('/around', function(req, res, next) {
  res.render('index', { title: 'Nerdial Inspiration', content: 'around', page : 'around', burger : true});
});

/* GET profil page. */
router.get('/profil', function(req, res, next) {
  res.render('index', { title: 'Nerdial Inspiration', content: 'profil', page : 'profil', burger : true});
});

/* GET discuss page. */
router.get('/discuss', function(req, res, next) {
  res.render('index', { title: 'Nerdial Inspiration', content: 'discuss', page : 'discuss', burger : true});
});

module.exports = router;
