// IMPORT MODULES FOR APP CONFIG
const expressSanitizer = require('express-sanitizer'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    seedDB = require('./seeds'),
    app = express();

// CONNECT TO MONGODB THROUGH MONGOOSE
mongoose.connect('mongodb://localhost:27017/yelp_camp_v3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressSanitizer());
app.set('view engine', 'ejs');

// MONGOOSE MODEL CONFIG
const Campground = require("./models/campground");
const Comment = require('./models/comment');

//seedDB();

// RESTFUL ROUTES

// HOME - Display the landing page
app.get('/', (req, res) => {
    logRequest(req);
    res.render("landing");
});

// INDEX - Display a list of all campgrounds
app.get('/campgrounds', async (req, res) => {
    // Get all campgrounds from DB
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds: campgrounds });
});

// CREATE - Add new campground to DB
app.post('/campgrounds', async (req, res) => {
    // get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;
    const newCampground = { name: name, image: image, description: desc };
    // Create a new campground and save to DB
    await Campground.create(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

// NEW - Displays form to make a new campground
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', async (req, res) => {
    // find the campground with provided ID
    const foundCampground = await Campground.findById(req.params.id).populate("comments");
    // render show template with that campground
    res.render('campgrounds/show', { campground: foundCampground });
});

// ====================
// COMMENT ROUTES
// ====================

app.get('/campgrounds/:id/comments/new', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('comments/new', { campground: campground });
});

app.post('/campgrounds/:id/comments', async (req, res) => {
    // lookup campground using ID
    const campground = await Campground.findById(req.params.id);
    // create new comment
    const comment = await Comment.create(req.body.comment);
    // connect new comment to campground
    campground.comments.push(comment);
    campground.save();
    // redirect to campground show page
    res.redirect(`/campgrounds/${req.params.id}`);
});


const port = 2000;

app.listen(port, () => {
    console.log(`YelpCamp app has started on port ${port}!`);
});

function logRequest(req) {
    console.log(`Someone has requested the '${req.originalUrl}' page!`)
}