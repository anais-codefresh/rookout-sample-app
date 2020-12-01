"use strict";
var rookout = require('rookout');
var express = require("express");
var { createHttpTerminator } = require('http-terminator')

rookout.start({
    labels:
        {
            "env":"dev", // Optional,see Labels page below Projects
        },
    git_origin:"git@github.com:anais-codefresh/rookout-sample-app.git"
});
var app = express();
const server = app.listen(5000);
const httpTerminator = createHttpTerminator({ server });

app.get('/', function (req, res) { return res.send("Hello World"); });
app.get("/hello/:name", function (req, res) {
    res.send("Hello, " + req.params.name);
});

setTimeout(() => {
    httpTerminator.terminate()
}, 15000)
  
//# sourceMappingURL=app.js.map