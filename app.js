//Vanilla JS query selector
document.querySelector('h1').style.color = 'red';

//#CONSOLE
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

//#VARIABLES AND DATA TYPES
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

//#TYPE CONVERSION
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

// #The Math Object
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
