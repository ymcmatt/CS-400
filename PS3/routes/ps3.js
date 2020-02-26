var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS3' });
});

router.get('/example', function(req, res, next) {
  res.render('example', { string: 'example' });
});

router.post('/3rdQuestion',function(req, res, next){
  res.render('3rdQuestion',{
    string: req.body['real'],
    length: req.body['real'].length
  })
})

module.exports = router;
