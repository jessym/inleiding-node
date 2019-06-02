////////////
console.log('*** COMMENTS ***')
////////////

// Inline comment

/*
Dit is een
block
comment
*/


////////////
console.log('*** VARIABLES ***')
////////////

const youngAge = 5;
let oldAge = 80;
oldAge = 90;

console.log(oldAge);


////////////
console.log('*** PRIMITIVE TYPES ***')
////////////

const age = 35; // Number
const name = 'Harry'; // String
const wizard = true; // Boolean
const a = undefined; // Undefined
const b = null; // Null


////////////
console.log('*** OPERATIONS ***')
////////////

const x = 10;
const y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

const cat = 'cat';
const dog = 'dog';
console.log(cat + dog);

const noRealNumber = '12';
const realNumber = Number(noRealNumber);
console.log(noRealNumber);
console.log(realNumber);

const holiday = true;
const sunny = true;

const great = holiday && sunny;
const happy = holiday || sunny;
const sad = !holiday && !sunny;


////////////
console.log('*** TRUTHY EN FALSY ***')
////////////

const clearlyTrue = true;
const clearlyFalse = false;

// Falsy (only 6)
const falsy1 = false;
const falsy2 = 0;
const falsy3 = '';
const falsy4 = null;
const falsy5 = undefined;
const falsy6 = NaN;

// Truthy (everything else)
const truthy1 = true;
const truthy2 = -40;
const truthy3 = 'Hello';


////////////
console.log('*** CONTROL FLOW ***')
////////////

if (true) {
  console.log('I will be executed');
}

if (900) {
  console.log('Me too');
}

if (holiday && sunny) {
  console.log('Me as well');
}

if (4 - 4) {
  console.log('I will not be executed');
}


////////////
console.log('*** FUNCTIES ***')
////////////

// Normal
function sayHello() {
  console.log('Hello');
}

sayHello();

// Normal
function sayGoodbye(name1, name2) {
  console.log('Goodbye ' + name1 + ' and ' + name2);
  return 22;
}

const returnVal = sayGoodbye('Harry', 'Hermelien');
console.log(returnVal);

// Fat-arrow
const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(100, 4));


////////////
console.log('*** ARRAYS ***')
////////////

const emptyArr = [];

const arr = ['hello', 52, true];
console.log(arr);

const element = arr[1];
console.log(element);

arr.forEach((elem) => {
  console.log('Element: ' + elem);
});


////////////
console.log('*** OBJECTS ***')
////////////

const emptyObject = {};

const obj = {
  name: 'Harry',
  age: 22,
  wizard: true,
  sayHello: () => {
    console.log('Hello');
  },
  sayGoodbye() {
    console.log('Goodbye');
  },
};

console.log(obj.age);
console.log(obj.name);

obj.sayGoodbye();


////////////
console.log('*** INGEBOUWDE FUNCTIES ***')
////////////

console.log(Math.round(2.7));
console.log(Math.floor(2.7));
console.log(Math.ceil(2.2));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


setTimeout(() => {
  console.log('This is setTimeout');
}, 2000);

setInterval(() => {
  console.log('This is setInterval');
}, 2000);