const fs = require('fs');

fs.readFile('./number.txt', 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    const currentNumber = Number(content);
    const newNumber = currentNumber * 2;
    fs.writeFile('./number.txt', newNumber, 'utf8', (err2) => {
        if (err2) {
            console.log(err2);
            process.exit(1);
        }
    });
});