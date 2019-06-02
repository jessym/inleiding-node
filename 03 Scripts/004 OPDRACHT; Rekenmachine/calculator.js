const x = process.argv[2];
const y = process.argv[3];

if (x && y) {
    console.log(Number(x) + Number(y));
} else {
    console.log('Please invoke this script with 2 numerical arguments');
}
