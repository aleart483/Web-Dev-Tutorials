const express = require('express');
const app = express();
const request = require('request');

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    logRequest(req);
    res.render("search");
});

app.get('/results', (req, res) => {
    logRequest(req);
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render("results", { data: data });
        }
    });
});

app.listen(3000, () => {
    console.log('Movie App has started on port 3000!');
});

function logRequest(req) {
    console.log(`Someone has requested the ${req.originalUrl} page!`)
}