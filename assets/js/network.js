var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/src/views/login.html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', function(req, res){
    res.render('../../src/views/login.html');
});

app.listen(app.get('port'), function() {
});