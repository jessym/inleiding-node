const axios = require('axios'); // Remember to execute `npm install` first

const query = process.argv[2];

axios.get('https://pokeapi.co/api/v2/pokemon/' + query)
    .then((response) => {
        const name = response.data.name;
        const weight = response.data.weight;
        console.log(name + ' (weight: ' + weight + ')');
    });