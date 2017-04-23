var express = require('express');
var app = express();

// Home Route
app.get("/", function(req, res) {
    res.render("home.ejs");
});

// Love Route
app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "Post 1", author: "Suzy" },
        { title: "Post 2", author: "Frank" },
        { title: "Post 3", author: "Sally" }
    ];
    res.render("posts.ejs", { posts: posts });
});

// Server config
config = {};
config.port = 3000;
config.host = "localhost";

// Start server
app.listen(config.port, config.host, function () {
  console.log("Server is listening on port " + config.port);
});
