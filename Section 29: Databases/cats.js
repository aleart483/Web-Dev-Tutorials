const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save((err, cat) => {
//     if (err) {
//         console.log("SOMETHING WENT WRONG!");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:");
//         console.log(cat);
//     }
// });

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, (err, cat) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });

Cat.remove({}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("REMOVED ALL CATS FROM DB:");
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, (err, cats) => {
    if (err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});

