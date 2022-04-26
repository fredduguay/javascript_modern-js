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

//#TYPE CONVERSIONS
