var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Bryant", "Kerry", "Katelin", "Kelly", "Samuel"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function (req, res) {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000, function () {
    console.log("Server has started on port 3000!");
})