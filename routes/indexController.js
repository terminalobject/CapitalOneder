var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CapitalOneder' , body: 'Visit /applications/new if you wish to become a citizen!' });
});

module.exports = router;