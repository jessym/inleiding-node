const fs = require('fs');
const fsp = fs.promises;

function logMessage(content) {
    console.log(content);
}

function exitProgram(err) {
    console.log(err);
    process.exit(1);
}

fsp.readFile('./message.txt', 'utf8')
    .then(logMessage, exitProgram)
    .then(() => console.log('Hello Fat Arrow'));