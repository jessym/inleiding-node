const express = require('express');

const app = express();
app.set('view engine', 'pug');

app.get('/flights/:from-:to', (req, res) => {
    const from = req.params.from;
    const to = req.params.to;
    const price = Math.round(Math.random() * 100);
    res.render('index', { from: from, to: to, price: price }); // Or just: { from, to, price }
});

app.listen(3000, () => console.log('Express server started!'));