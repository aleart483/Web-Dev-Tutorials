var express = require("express");
var app = express();

// "/" => "Hi there!"

app.get("/", function (req, res) {
    console.log("Someone made a request to /");
    res.send("<h1>Hi there!</h1>");
});

// "/bye" => "Goodbye!"

app.get("/bye", function (req, res) {
    console.log("Someone made a request to /bye");
    res.send("<h1>Goodbye!</h1>");
});

// "/dog" => "MEOW!"

app.get("/dog", function (req, res) {
    console.log("Someone made a request to /dog");
    res.send("<h1>MEOW!</h1>");
});

// /r/:singleParameterRouteExample => "YOU ARE A STAR!!!"

app.get("/r/:subredditName", function (req, res) {
    let subreddit = req.params.subredditName;
    console.log("Someone made a request to /r/" + subreddit);
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

// /r/:multipleParameterRouteExample => "YOU ARE A STAR AMONG THE REDDIT COMMENTS!!!"

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    console.log("Someone made a request to /r/:subredditName/comments/:id/:title");
    res.send("YOU ARE A STAR AMONG THE REDDIT COMMENTS!!!");
});

// default route => "YOU ARE A STAR!!!"

app.get("*", function (req, res) {
    console.log("Someone made a request to *");
    res.send("<h1>YOU ARE A STAR!!!</h1>");
});


// Tell Express to listen for requests (start server)

app.listen(3000, function () {
    console.log("Started Web Server on port 3000!");
});