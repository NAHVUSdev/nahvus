var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/static/index.html'));
});

app.get('/health', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/health/index.html'));
});

app.get('/lifestyle', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/lifestyle/index.html'));
});

app.get('/welcome', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/static/welcome.html'));
});

app.get('/incomplete', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/static/incomplete.html'));
});

app.get('/reviews', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/reviews/index.html'));
});

app.get('/account', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/user/account.html'));
});

app.listen(8080);
