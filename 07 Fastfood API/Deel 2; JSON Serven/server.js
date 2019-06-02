const express = require('express');

const app = express();

const mcdonalds = { name: 'McDonalds' };
const subway = { name: 'Subway' };
const kfc = { name: 'Kentucky Fried Chicken' };
const chains = [mcdonalds, subway, kfc];

app.get('/chains', (req, res) => {
    res.send(chains);
});
app.get('/chains/mcdonalds', (req, res) => {
    res.send(mcdonalds);
});
app.get('/chains/subway', (req, res) => {
    res.send(subway);
});
app.get('/chains/kfc', (req, res) => {
    res.send(kfc);
});

app.listen(3000, () => console.log('Express server started on port 3000!'));