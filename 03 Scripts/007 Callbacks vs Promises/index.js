// FICTIEVE CODE (WERKT NIET ECHT)

// Callbacks

setTimeout(() => {
    readFile('./file.txt', 'utf8', (err, content) => {
        connectDatabase('mysql', (err, connection) => {
            connection.save('This should be saved to the DB', (err) => {
                disconnectDatabase('mysql', (err) => {
                    writeFile('./file2.txt', 'Hello World', 'utf8', (err) => {
                        setTimeout(() => {
                            console.log('Done');
                        }, 5000);
                    });
                });
            });
        });
    });
}, 5000);

// Promises

setTimeout(5000)
    .then(() => {
        return readFile('./file.txt', 'utf8');
    })
    .then((content) => {
        return connectDatabase('mysql');
    })
    .then((connection) => {
        return connection.save('This should be saved to the DB');
    })
    .then(() => {
        return disconnectDatabase('mysql');
    })
    .then(() => {
        return writeFile('./file2.txt', 'Hello World', 'utf8');
    })
    .then(() => {
        return setTimeout(5000);
    })
    .then(() => {
        console.log('Done');
    });