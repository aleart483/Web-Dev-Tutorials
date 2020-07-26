// Import & Setup Node Modules for app.js

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

// Campground Schema Setup

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
const Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create({
//     name: "Schabarum Park",
//     image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
//     description: "This is a huge luxurious park, some bathrooms. Poor water. Beautiful mountain lions!"
// }, (err, campground) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log(campground);
//     }
// });

// Routing

// HOME - Display the landing page
app.get('/', (req, res) => {
    logRequest(req);
    res.render("landing");
});

// INDEX - Display a list of all campgrounds
app.get('/campgrounds', (req, res) => {
    logRequest(req);
    // Get all campgrounds from DB
    Campground.find({}, (err, campgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: campgrounds });
        }
    });
});

// CREATE - Add new campground to DB
app.post('/campgrounds', (req, res) => {
    // get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;
    const newCampground = { name: name, image: image, description: desc };
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
});

// NEW - Displays form to make a new campground
app.get('/campgrounds/new', (req, res) => {
    logRequest(req);
    res.render('new');
});

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    logRequest(req);
    // find the campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // render show template with that campground
            res.render('show', { campground: foundCampground });
        }
    });
});




app.listen(3000, () => {
    console.log("YelpCamp app has started on port 3000!");
});

function logRequest(req) {
    console.log(`Someone has requested the '${req.originalUrl}' page!`)
}