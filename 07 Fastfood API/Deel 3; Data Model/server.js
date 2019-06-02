const express = require('express');

const app = express();

const mcdonalds = { id: 'mcdonalds', name: 'McDonalds', city: 'Utrecht', score: 6 };
const subway = { id: 'subway', name: 'Subway', city: 'Leeuwarden', score: 7 };
const kfc = { id: 'kfc', name: 'Kentucky Fried Chicken', city: 'Lelystad', score: 8 };
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