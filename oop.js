// ################
// #CONSTRUCTOR
// ################

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.age = age;
  this.birthday = new Date(dob);
  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}

const brad = new Person('Brad', '9-10-1981');

// console.log(brad.calculateAge());

// ################
// #BUILT IN CONSTRUCTORS
// ################

//String
const name1 = 'Jeff';
const name2 = new String('Jeff');

name2.foo = 'bar';

//type string
console.log(typeof name1);

//type object
console.log(typeof name2);

//Number
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Function
const getSum1 = function (x, y) {
  return x + y;
};

getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1, 2));
console.log(getSum2(4, 1));

//Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

//Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

// ################
// #PROTOTYPES
// ################

//Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getsMaried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());
console.log(mary.getsMaried('Roberson'));
console.log(mary.getFullName());

//Object.prototype
console.log(mary.hasOwnProperty('firstName'));
