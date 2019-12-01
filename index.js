var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    "use strict";
    res.sendFile('index.html', {root: path.join(__dirname, 'app')});
});

app.get('/:url', function (req, res) {
    "use strict";
    var url = req.params.url;

    res.sendFile('/' + url + '/', {root: path.join(__dirname, 'app')});
});

app.get('/redir_nhvsasi', function (req, res) {
    "use strict";
    res.redirect('https://nahvusasi.com');
});

app.get('/redir_newtasi', function (req, res) {
    "use strict";
    res.redirect('https://newtonasi.com');
});

app.listen(8080);
