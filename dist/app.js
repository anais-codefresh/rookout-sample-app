"use strict";
var express = require("express");
var app = express();
var rookout = require('rookout');
rookout.start();
app.get('/', function (req, res) { return res.send("Hello World"); });
app.get("/hello/:name", function (req, res) {
    res.send("Hello, " + req.params.name);
});
app.listen(5000);
//# sourceMappingURL=app.js.map