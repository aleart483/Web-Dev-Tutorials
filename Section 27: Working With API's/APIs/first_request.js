const axios = require('axios');
const express = require('express'), app = express();

// Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {
//         // handle success
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed
//     });

app.get('/', async (req, res, next) => {
    // Make a request for a user with a given ID
    try {
        const response = await axios
            .get('https://jsonplaceholder.typicode.com/users/1');
        console.log(response.data);
        res.send(`${response.data.name} live in ${response.data.address.city}`);
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, () => {
    console.log('Server has started on port 3000!');
});