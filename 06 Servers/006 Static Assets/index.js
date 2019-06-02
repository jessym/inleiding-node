const express = require('express');

const app = express();
const middleware = express.static('public');
app.use(middleware);

app.listen(3000, () => console.log('Started server on port 3000'));