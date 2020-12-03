"use strict";
const rookout = require('rookout')

rookout.start({
    labels:
        {
            "env":"dev" // Optional,see Labels page below Projects
        }
});
const express = require("express")
const app = express()

app.get('/', (req, res) => res.send("Hello World"))
app.get("/hello/:name", (req, res) => {
    res.send("Hello, " + req.params.name)
})

app.listen(5000)