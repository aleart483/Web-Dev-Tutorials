// IMPORT MODULES FOR APP CONFIG
const expressSanitizer = require('express-sanitizer'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
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
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressSanitizer());
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

// INDEX ROUTE

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

// NEW ROUTE
app.get('/blogs/new', (req, res) => {
    res.render('new');
});

// CREATE ROUTE
app.post('/blogs', (req, res) => {
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    let data = req.body.blog;
    Blog.create(data, (err, newBlog) => {
        if (err) {
            res.render('new');
        } else {
            // redirect to the index
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('show', { blog: foundBlog });
        }
    });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', { blog: foundBlog });
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect(`/blogs/${req.params.id}`);
        }
    });
});

// DELETE ROUTE
app.delete('/blogs/:id', (req, res) => {
    // destroy blog
    Blog.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
    // redirect to the blogs page
});

app.listen(3000, () => {
    console.log('RESTful Blog App has started on port 3000!');
});

// FUNCTIONS FOR LOGGING WHEN SOMEONE MAKES A REQUEST TO A WEBPAGE
function logRequest(req) {
    console.log(`Someone has requested the '${req.originalUrl}' page!`)
}