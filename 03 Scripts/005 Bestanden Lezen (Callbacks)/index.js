const fs = require('fs');

function callback(err, content) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(content);
}

fs.readFile('./message.txt', 'utf8', callback);