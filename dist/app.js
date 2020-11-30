"use strict";
var rookout = require('rookout');
var timeout = require('connect-timeout');
var cookieParser = require('cookie-parser');
rookout.start();
var express = require("express");
var app = express();
app.use(timeout('5s'));
app.use(haltOnTimedout);
app.use(cookieParser());
app.use(haltOnTimedout);
app.get('/', function (req, res) { return res.send("Hello World"); });
app.get("/hello/:name", function (req, res) {
    res.send("Hello, " + req.params.name);
});
function haltOnTimedout(req, res, next) {
    if (!req.timedout)
        next();
}
app.listen(5000);
//# sourceMappingURL=app.js.map