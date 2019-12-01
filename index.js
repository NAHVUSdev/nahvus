var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    "use strict";
    res.sendFile('index.html', {root: path.join(__dirname, 'app')});
});

app.get('/lifestyle', function (req, res) {
    "use strict";
    res.sendFile('/lifestyle/index.html', {root: path.join(__dirname, 'app')});
});

app.get('/health', function (req, res) {
    "use strict";
    res.sendFile('/health/index.html', {root: path.join(__dirname, 'app')});
});

app.get('/user/account', function (req, res) {
    "use strict";
    res.sendFile('/user/account.html', {root: path.join(__dirname, 'app')});
});

app.get('/welcome', function (req, res) {
    "use strict";
    res.sendFile('welcome.html', {root: path.join(__dirname, 'app')});
});

app.get('/incomplete', function (req, res) {
    "use strict";
    res.sendFile('incomplete.html', {root: path.join(__dirname, 'app')});
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
