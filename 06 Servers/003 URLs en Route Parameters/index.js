const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Base');
});
app.get('/maps', (req, res) => {
    res.send('Hello Maps');
});
app.get('/about', (req, res) => {
    res.send('Wij verkopen tweedehands meubels');
});
app.get('/contact', (req, res) => {
    res.send('ABCstraat 1, 1234 AB, Arnhem');
});

app.get('/wiki/:topic', (req, res) => {
    const topic = req.params.topic;
    res.send('This is a Wikipedia article about ' + topic);
});

app.listen(3000, () => console.log('Started server on port 3000'));