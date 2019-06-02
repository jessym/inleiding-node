const axios = require('axios');

const id = process.argv[2];

if (id) {
    axios.get('http://localhost:3000/chains/' + id)
        .then((response) => {
            const chain = response.data;
            console.log(chain);
        });
} else {
    axios.get('http://localhost:3000/chains')
        .then((response) => {
            const chains = response.data;
            console.log(chains);
        });
}