// ################
// #DOCUMENT OBJECT
// ################

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; // return all the classes
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[1].getAttribute('src');

console.log(val);

let scripts = document.scripts;

//Convert html collection to scripts array
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script);
});

console.log(scriptsArr);

// ################
// #SELECTORS FOR SINGLE ELEMENTS
// ################

//document.getElementbyId();
console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

//document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '##f4f4f4';

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');

console.log(listItems);

//document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello Li';

//Convert HTML collections into an array
lis = Array.from(lis);
lis.reverse();

lis.forEach(function (li) {
  console.log(li.className);
});

console.log(lis);

//document.querySelectorAll
const citem = document.querySelectorAll('ul.collection li.collection-item');

//loop items from HTML Collection
citem.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(citem);

//TRAVERSING THE DOM

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

console.log((val = listItem)); //li
console.log((val = list)); //ul

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

//Node types
//1 - Element
//2 - Attribute (Deprecated)
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - DocType`

//Get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Hello';

//Children of children
val = list.children[3];
console.log(val);
