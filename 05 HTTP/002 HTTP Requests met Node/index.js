const axios = require('axios'); // Remember to execute `npm install` first

axios.get('https://www.google.com/')
    .then((response) => console.log(response.headers));