// Include the express framework to run web app

var express = require("express");
var app = express();

// ============================================================================
// ================================= ROUTES ===================================
// ============================================================================

// Visiting "/" should print "Hi there, welcome to my assignment!"

app.get("/", function (req, res) {
    console.log("Someone made a request to /");
    res.send("Hi there, welcome to my assignment!");
});


// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The pig says 'Moo'"
// Visiting "/speak/dog" should print "The pig says 'Woof Woof'"
app.get("/speak/:animal", function (req, res) {
    let animal = req.params.animal.toLowerCase();
    console.log("Someone made a request to /speak/" + animal);
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        lion: "Roar"
    }
    if (sounds[animal]) {
        res.send("The " + animal + " says '" + sounds[animal] + "'.");
    } else {
        res.send("Sorry, that animal is not registered in our database.\n" +
            "Please try using 'pig', 'cow', 'dog', 'cat', or 'lion'.");
    }
});


// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/2" should print "hello hello"
// Visiting "/repeat/blah/2" should print "blah blah"

app.get("/repeat/:msg/:n", function (req, res) {
    let msg = req.params.msg, n = req.params.n;
    console.log("Someone made a request to /repeat/" + msg + "/" + n);
    if (!isNaN(n) && Number(n) > 0) {
        let repeat = "";
        for (let i = 0; i < Number(n); i++) {
            repeat += msg + " ";
        }
        res.send(repeat);
    } else {
        res.send("Sorry, invalid number argument.");
    }

});


// If a user visits any other route, print:
//      "Sorry, page not found... What are you doing with your life?"

app.get("*", function (req, res) {
    console.log("Someone made a request to *");
    res.send("Sorry, page not found... What are you doing with your life?");
});


// Tell Express to listen for requests (start server)

app.listen(3000, function () {
    console.log("Started Web Server on port 3000!");
});