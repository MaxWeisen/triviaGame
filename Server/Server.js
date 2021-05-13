const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
// const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();

//Enable Cors
// app.use(cors());


// Connect The Server to the Mongo DB
// mongoose.connect('mongodb+srv://Batfish:Codesmith20@cluster0.mrdoj.mongodb.net/Trivia?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

// const db = mongoose.connection;
// db.on('error', (error) =>  console.log(error));
// db.once('open', function() {
//     console.log('CONNECTED TO MONGO DB')
// });

app.use(express.json());

// TESTING
// app.use((req, res, next) => {
//     console.log(req.body);
//     next();
// })

// Sends the React App
// app.use('/build', express.static(path.join(__dirname, '../build')));

// Sends the Login Page
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../Client/App/index.html'));
// });

// Gets the Trivia questions from the Trivia Api and sends the questions back to the React App
// app.get('/api', (req, res) => {
//     fetch('https://opentdb.com/api.php?amount=10&category=12')
//      .then(data => data.json())
//      .then(triviaQuest => res.status(200).json(triviaQuest))
//      .then(end => res.end());
// })

// Test route for Spearmint Endpoint Testing
app.get('/test', (req, res) => {
  res.status(200).json('Request Received');
});

// let app1 = app.listen()
module.exports = app;

// app.listen(3001);