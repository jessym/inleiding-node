const express = require('express');

const app = express();
app.set('view engine', 'pug');

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.render('index', { firstName: name });
});

app.listen(3000, () => console.log('Started server on port 3000'));