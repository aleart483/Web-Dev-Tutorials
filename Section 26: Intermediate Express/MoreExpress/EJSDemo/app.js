// Include the express framework to run web app

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// ============================================================================
// ================================= ROUTES ===================================
// ============================================================================

app.get("/", function (req, res) {
    console.log("Someone has made a request to '/'");
    res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    let thing = req.params.thing;
    console.log("Someone has made a request to " + req.originalUrl);
    res.render("love", { thingy: thing });
    //console.log(req);
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "POV: It is your first time at the beach", author: "Bryant" },
        { title: "My adorable puppy", author: "Alex" },
        { title: "A title of a post", author: "Katelin" }
    ];

    res.render("posts", { posts: posts });
});

// Start server on port 3000

app.listen(3000, function () {
    console.log("Server has started on port 3000!");
});