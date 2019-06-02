const fs = require('fs');
const fsp = fs.promises;

function exitProgram(err) {
    console.log(err);
    process.exit(1);
}

fsp.readFile('./number.txt', 'utf8')
    .then(
        (content) => {
            const currentNumber = Number(content);
            const newNumber = currentNumber * 2;
            return fsp.writeFile('./number.txt', newNumber, 'utf8');
        },
        exitProgram
    )
    .then(
        () => console.log('Done!'),
        exitProgram
    );