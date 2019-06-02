const express = require('express');
const database = require('./database.js');

const app = express();

app.get('/chains', (req, res) => {
    database.findAll()
        .then((chains) => res.send(chains));
});
app.get('/chains/:id', (req, res) => {
    const id = req.params.id;
    database.findById(id)
        .then((chain) => {
            if (chain) {
                res.send(chain);
            } else {
                res.send({ error: 'Chain Not Found' });
            }
        });
});

app.listen(3000, () => console.log('Express server started on port 3000!'));