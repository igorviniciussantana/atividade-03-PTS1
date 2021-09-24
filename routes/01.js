var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticias/01/index', { nome: 'Express' });
});

module.exports = router;