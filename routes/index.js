var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Deer Hack 2023 Sifal' });
});

module.exports = router;
