var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    res.render('index');
});

router.get('/about', function(req, res){
    res.render('about');
});

router.get('/project', function(req, res){
    res.render('project');
});

router.get('/contact', function(req, res){
    res.render('contact');
});

module.exports = router;