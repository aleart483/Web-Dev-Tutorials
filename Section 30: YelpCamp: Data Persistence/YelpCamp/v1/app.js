const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    logRequest(req);
    res.render("landing");
});

app.get('/campgrounds', (req, res) => {
    logRequest(req);
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post('/campgrounds', (req, res) => {
    // get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    logRequest(req);
    res.render('new');
});




app.listen(3000, () => {
    console.log("YelpCamp app has started on port 3000!");
});



let campgrounds = [
    { name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Granite Hill", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Schabarum Park", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350" }
];

function logRequest(req) {
    console.log(`Someone has requested the '${req.originalUrl}' page!`)
}