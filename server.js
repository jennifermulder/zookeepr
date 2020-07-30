const express = require('express');
const { animals } = require('./data/animals');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

//instantiate server(single instance of the Express.js server)
const app = express();

//middleware
app.use(express.static('public'));

//pass through these functions first
// parse incoming string or array data. parse into key/value pairings
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//animalfunction

//animalRoute.js

// //add route. (req is an object)
// router.get('/animals', (req, res) => {
//     let results = animals;
//     // //query takes everything after ? in host
//     // console.log(req.query)
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });

// router.get('/animals/:id', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });
// //client requesting the server to accept data
// router.post('/animals', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();

//     // if any data in req.body is incorrect, send 400 error back
//     if (!validateAnimal(req.body)) {
//         //user error not server error. sends status to user
//         res.status(400).send('The animal is not properly formatted.');
//     } else {
//         // add animal to json file and animals array in this function
//         const animal = createNewAnimal(req.body, animals);
//         res.json(animal);
//     }

//     // // req.body is where our incoming content will be
//     // console.log(req.body);
//     //sends data back to client
//     res.json(animal);
// });



//index.js

// //root route of the server(create homepage). This gets index.html to be served by the Express.js server
// app.get('/', (req, res) => {
//     //respond with an html page to display in the browser. need to input directory(tell where to find the file)
//     //using 'path' will work in any server environment
//     res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

// app.get('/animals', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/animals.html'));
// });

// app.get('/zookeepers', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });

//listen for requests
app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT}`);
});