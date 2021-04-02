var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('Nguyen Hai Dang1')
    res.render('login', {title: 'Express'});
});


router.get('/main', function (req, res, next) {
    console.log('Nguyen Hai Dang2')
    res.render('main', {title: 'Express'});

});

router.get('/profile.hbs', function (req, res, next) {
    console.log('Nguyen Hai Dang2')
    res.render('profile', {title: 'Express'});

});

router.get('/table.hbs', function (req, res, next) {
    console.log('Nguyen Hai Dang2')
    res.render('table', {title: 'Express'});

});

router.get('/index.hbs', function (req, res, next) {
    console.log('Nguyen Hai Dang2')
    res.render('main', {title: 'Express'});

});



module.exports = router;
