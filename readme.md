# The Web Developer Bootcamp: Alex's Notes

This repository includes all of my progress for following Colt Steele's The Web Developer Bootcamp course on Udemy.com. This readme.md file includes my notes stolen by Colt as he teaches the concepts.


## Section 24: Node JS

### Intro to Node

* What is Node?
* Why are we learning it?
    * It's popular!
* (it doesn't matter(long term))

### Using Node

* Interact with Node Console
* Run a file with node

### Intro to NPM

* Define NPM
* Explain why NPM is awesome
* Intro the packages we will end up using

### Installing and Using Packages

* Use 'npm install' to install a package
* Use 'require()' to include a package





## Section 25: Server Side Frameworks

### Introduction to Express

* What is a framework? How is it different from a library?
* What is Express?
* Why are we using Express?

### Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

### NPM Init and Package.json

* Use the '--save' flag to install packages
* Explain what the package.json file does
* Use 'npm init' to create a new package.json

### More Routing!

* Show the '*' route matcher
* Write routes containing route parameters
* Discuss route order





## Section 26: Intermediate Express

### Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and why we use it
* Pass variables to EJS templates

### EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

### Styles And Partials

* Show how to properly include assets
* Properly configure our app to use EJS
* Use partials to dry up our code!

### Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data





## Section 30: YelpCamp Data Persistence

### Add Mongoose

* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

### Show Page

* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES
```
name        url         verb        desc.
=======================================================================
INDEX       /dogs       GET         Display a list of all dogs
NEW         /dogs/new   GET         Displays form to make a new dog
CREATE      /dogs       POST        Add new dog to DB
SHOW        /dogs/:id   GET         Shows info about one dog
```





## Section 31: RESTful Routing

### Introduction

* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD which stands for

```
CREATE
READ
UPDATE
DESTROY
```

A table of all 7 RESTful routes

```
Name    Path            Verb    Purpose
===============================================================================
index   /dogs           GET     List all dogs
new     /dogs/new       GET     Show new dog form
create  /dogs           POST    Create a new dog, then redirect somewhere
show    /dogs/:id       GET     Show info about one specific dog
edit    /dogs/:id/edit  GET     Show edit form for one dog
update  /dogs/:id       PUT     Update a particular dog then redirect somewhere
destroy /dogs/:id       DELETE  Delete a particular dog then redirect somewhere
```

### Blog Index

* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

### Basic Layout

* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

### Putting the C in CRUD

* Add new route
* Add new template
* Add create route
* Add create template

### SHOWtime

* Add show route
* Add show template
* Add links to show page
* Style show template

### Edit/Update

* Add edit route
* Add edit form
* Add update route
* Add update form
* Add Method-Override

### DESTROYYYYYY

* Add destroy route
* Add edit and destroy links

### Final Updates

* Sanitize blog body
* Style Index
* Update REST Table





## Section 32: Data Associations

### Intro to Associations

* Define associations
* Discuss one:one, one:many, and many:many relationships

### Referencing Data

### Module.Exports

* Introduce module.exports
* Move our models into separate files





## Section 33: YelpCamp: Comments

### Refactor Mongoose Code

* Create a models directory
* Use module.exports
* Require everything correctly!

### Add Seeds File

* Add a seeds.js file
* Run the seeds file every time the server starts

### Add the Comment model!

* Make our errors go away!
* Display comments on campground show page

### Comment New/Create

* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

### Style Show Page

* Add side bar to show page
* Display comments nicely

### Finish Styling Show Page

* Add public directory
* Add custom stylesheet





## Section 34: Authentication

### Intro to Auth

* What tools are we using?
    * Passport
    * Passport Local
    * Passport Local Mongoose
* Walk through auth flow
* Discuss sessions
    * Express-Session

### Auth Code Along Part 1

* Set up folder structure
* Install needed packages
* Add root route and templates
* Add secret route and template

### Auth Code Along Part 2

* Create User Model
* Configure passport

### Auth Code Along Part 3

* Add Register routes
* Add Register form

### Auth Code Along Part 4

* Add Login routes
* Add Login form

### Auth Code Along Part 5

* Add logout Route
* Add isLoggedIn middleware