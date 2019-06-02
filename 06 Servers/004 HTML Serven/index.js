const express = require('express');
const renderGreeting = require('./templates/greeting.js');

const app = express();

app.get('/:name', (req, res) => {
    const name = req.params.name;
    const html = renderGreeting(name);
    res.send(html);
});

app.listen(3000, () => console.log('Started server on port 3000'));