#Intro to Node

* What is Node?
* Why are we learning it?
    * It's popular!
* (it doesn't matter(long term))



#Using Node

* Interact with Node Console
* Run a file with node



#Intro to NPM

* Define NPM
* Explain why NPM is awesome
* Intro the packages we will end up using



#Installing and Using Packages

* Use 'npm install' to install a package
* Use 'require()' to include a package



#Introduction to Express

* What is a framework? How is it different from a library?
* What is Express?
* Why are we using Express?



#Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!



#NPM Init and Package.json

* Use the '--save' flag to install packages
* Explain what the package.json file does
* Use 'npm init' to create a new package.json



#More Routing!

* Show the '*' route matcher
* Write routes containing route parameters
* Discuss route order



#Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and why we use it
* Pass variables to EJS templates



#EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file



#Styles And Partials

* Show how to properly include assets
* Properly configure our app to use EJS
* Use partials to dry up our code!



#Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data



#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes



#Show Page
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


#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD