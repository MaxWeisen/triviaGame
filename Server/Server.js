const express = require('express');
const path = require('path');

const app = express();

// app.use((req, res, next) => {
//   console.log('this is req.url', req.url);
// })

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Client/App/index.html'));
});

app.listen(3000);