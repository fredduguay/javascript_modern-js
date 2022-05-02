//Vanilla JS query selector
document.querySelector('h1').style.color = 'red';

// ################
//#CONSOLE
// ################
console.table({ a: 1, b: 2 });

console.error('This is an error');
console.warn('This is a warning');

console.clear();

console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

// ################
//#VARIABLES AND DATA TYPES
// ################
const person = {
  name: 'John',
  age: 30
};

const numbers = [1, 2, 3, 4, 5];

//can't reassign const but can change values of object properties
person.name = 'Sara';
person.age = 32;

//can't reassign const but can push new value to array
numbers.push(6);

console.log(person, numbers);

//ES6 Symbol Data Type
const sym = Symbol();
console.log(typeof sym);

// ################
//#TYPE CONVERSION
// ################
val1 = String(4 + 4);
val2 = [1, 2, 3, 4].toString();
val3 = Number('5');

//100
val4 = parseInt('100.30');
//100.30
val5 = parseFloat('100.30');

console.log(val1);

console.log(val2);
console.log(val2.length);

// val3 with 2 decimals
console.log(val3.toFixed(2));

// ################
// #THE MATH OBJECT
// ################
let val;
val = Math.PI;
val = Math.E;

//2
val = Math.round(2.4);
//3
val = Math.ceil(2.4);
//2
val = Math.floor(2.8);
//8
val = Math.sqrt(64);
//3
val = Math.abs(-3);
//64
val = Math.pow(8, 2);
//1
val = Math.min(2, 33, 1, 444, 55, 35);
//Random decimal number
val = Math.random();
//Random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

// #STRING METHODS - CONCATENATION AND TEMPLATE LITERALS
const firstName = 'William';
const lastName = 'Johnson';
const age = 34;
const str = 'Hello there my name is Brad';
const tags = 'Web Development, Programming, Design';

//concat()
val = firstName.concat(' ', lastName);

//toUpperCase(), toLowerCase()
val = firstName.toLowerCase();
val = firstName.toUpperCase();

//indexOf() - 2 (William)
val = firstName.indexOf('l');

//indexOf() - 3 (William)
val = firstName.lastIndexOf('l');

//Escaping
// val = 'That\'s awesome, I can\'t wait'

//l charAt()
val = firstName.charAt('2');

//Get last char
val = firstName.charAt(firstName.length - 1);

//substring() - Will
val = firstName.substring(0, 4);

//slice() - Will
val = firstName.slice(0, 4); // first 4

//slice() - iam
val = firstName.slice(-3); // last 3

//split()
str.split(' ');
tags.split(',');

//replace()
str.replace('Brad', 'Jack');

//includes
val = str.includes('foo');

// ################
// #TEMPLATE LITERALS (ES6)
// ################

const name = 'John';
const myAge = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;
function hello() {
  return 'hello';
}

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${myAge}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${myAge > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

console.log(html);

// ################
// #ARRAYS & ARRAY METHODS
// ################
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = new Array(1, 2, 3, 4, 5);
const numbers3 = [122, 6, 44, 23, 903];
const numbers4 = [122, 6, 44, 23, 903];
const fruits = ['banana', 'apple', 'orange'];

val = numbers1.length;
val = Array.isArray(numbers1);

//Find  index of value
val = numbers.indexOf(4);

//Mutation
//Add on to end
numbers.push(8);
//Add on to front
numbers.unshift(4);

//Take off from end
numbers.pop();
//Take off from front
numbers.shift();

//Splice values
numbers.splice(1, 3);

//Reverse
numbers.reverse();

//Concatenate arrays
val = numbers1.concat(numbers2);

//Sorting arrays
val = fruits.sort();
val = numbers3.sort(); // will sort by the first number

//Use the compare fonction to sort
val = numbers.sort(function (x, y) {
  return x - y;
});

//Use the compare fonction to reversesort
val = numbers.sort(function (x, y) {
  return y - x;
});

//Find and return the first number that matches the condition in the array
function under50(num) {
  return num < 50;
}

val = console.log(numbers4.find(under50));

// ################
// #DATES AND TIME
// ################
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981)');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// ################
// #IF STATEMENTS AND COMPARISON OPERATORS
// ################

const id = 100;

if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

//Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//Without Braces
if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');

// ################
// #SWITCHES
// ################
const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not blue or red');
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  default:
    console.log('Day of the week unknown');
    break;
}

// ################
// #FUNCTIONS
// ################

//Function Declarations

//DEFAULTS: ES5
function greet(firstName, lastName) {
  if (typeof firstName === 'undefined') {
    firstName = 'John';
  }
  if (typeof lastName === 'undefined') {
    firstName = 'Doe';
  }
  return 'Hello' + firstName + ' ' + lastName;
}

//DEFAULTS: ES6
function greet(firstName = 'John', lastName = 'Doe') {
  if (typeof firstName === 'undefined') {
    firstName = 'John';
  }
  if (typeof lastName === 'undefined') {
    firstName = 'Doe';
  }
  return 'Hello' + firstName + ' ' + lastName;
}

console.log(greet());

//Function Expressions

const square = function (x = 3) {
  return x * x;
};

//Returns 3 because nothing is passed to the function
console.log(square());

//Immediatly invokable function expresssions - IIFEs
(function (name) {
  console.log('Hello' + name);
})('Brad');

//Property Methods
const todo = {
  add: function () {
    console.log('add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();

// ################
// #LOOPS
// ################

//For Loop
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
  }

  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log(`For iteration # ${i}`);
}

//While Loop
let x = 0;

while (x < 5) {
  console.log(`While iteration # ${x}`);
  x++;
}

//Do while

let w = 1;

do {
  console.log(`Do While iteration # ${w}`); //Runs at least once even when 'while condition' is not met
  w++;
} while (w > 6);

const cars = ['Ford', 'Chevy', 'Honda'];

//For vs forEach
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach(function (car, index, array) {
  console.log(car);
});

//For each can take 3 parameters (element, index, array)
cars.forEach(function (car, index, array) {
  console.log(car);
});

//Map
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' }
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

//For  in / Get key values pairs from object
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// ################
// #WINDOW METHODS/ OBJECT / PROPERTIES
// ################

window.console.log(123);

// window.alert('Hello World');

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm('Are you sure')) {
//   console.log('Yes');
// } else {
//   console.log('NO');
// }

// let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.outerHeight;
val = window.outerWidth;

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;

//Returns protocol, hostname and port
val = window.location.href;

//Search (Returns query string)
val = window.location.search;

//Redirect
// window.location.href = 'http://google.com';

//Reload
// window.location.reload();

//History Object
window.history.go(-2);
val = window.history.length;

//Navigator Object
val = window.navigator;
`
`;
val = window.navigator.vendor;
val = window.navigator.userAgent;
val = window.navigator.language;

//Deprecated
val = window.navigator.platform;
val = window.navigator.appName;

console.log(val);

// ################
// #BLOCK SCOPE WITH LET & CONST
// ################

//Global scope
var sc_a = 1;
let sc_b = 2;
const sc_c = 3;

function test() {
  var sc_a = 4;
  let sc_b = 5;
  const sc_c = 6;

  console.log('Function Scope: ', sc_a, sc_b, sc_c);
}

test();

console.log('Global Scope: ', sc_a, sc_b, sc_c);

if (true) {
  // Block Scope
  var sc_a = 4;
  let sc_b = 5;
  const sc_c = 6;
  console.log('If Scope: ', sc_a, sc_b, sc_c);
}

for (let a = 0; a < 10; a++) {
  console.log(`Loop ${a}`);
}

console.log('Global Scope: ', sc_a, sc_b, sc_c);
