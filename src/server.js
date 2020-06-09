const express = require('express');
const server = express();
//const db = require('./database/db.js');

server.use(express.static("public"));

server.use(express.urlencoded({extended: true}));

const nunjucks = require('nunjucks');
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/ps", (req, res) => {
    return res.render("ps.html");
});

server.get("/gamejam", (req, res) => {
    return res.render("gamejam.html");
});

server.listen(3000);