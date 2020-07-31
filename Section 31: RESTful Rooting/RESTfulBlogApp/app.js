// IMPORT MODULES FOR APP CONFIG
const bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

// CONNECT TO MONGODB THROUGH MONGOOSE
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MONGOOSE MODEL CONFIG
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// RESTFUL ROUTES

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
    logRequest(req);
    // retrieve all the blogs from the DB
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            // render the index page with blogs
            res.render('index', { blogs: blogs });
        }
    })
});

app.listen(3000, () => {
    console.log('RESTful Blog App has started on port 3000!');
});

// FUNCTIONS FOR LOGGING WHEN SOMEONE MAKES A REQUEST TO A WEBPAGE
function logRequest(req) {
    console.log(`Someone has requested the '${req.originalUrl}' page!`)
}