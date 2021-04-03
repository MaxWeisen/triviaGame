const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();



app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Client/App/index.html'));
});

app.get('/api', (req, res) => {
    fetch('https://opentdb.com/api.php?amount=10&category=12')
     .then(data => data.json())
     .then(triviaQuest => res.status(200).json(triviaQuest))
     .then(end => res.end());
})

app.listen(3000);