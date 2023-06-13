var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'Express' });
});
router.get('/cookies', function(req, res, next) {
  console.log('COOKIESSSSSSSSSS: ', req.query.dwsid);
  res.render('index', { title: 'Express' });
});

module.exports = router;
