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
val = document.links[0].classList; // returns all the classes as a DOMTokenList

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

// // ################
// // #TRAVERSING THE DOM
// // ################

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

// //Children of children
val = list.children[3].children;
val = list.children[3].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

//Traversing up and down
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);

// // ################
// // #CREATING ELEMENTS
// // ################

//Create element
const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//Create new link element
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link into li
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// // ################
// // #REMOVING AND REPLACING ELEMENTS
// // ################

//REPLACE ELEMENT
//Create element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
//replaceChild(newValue, oldValue)
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE ELEMENT
const all_lis = document.querySelectorAll('li');
const ul_list = document.querySelector('ul');

//Remove list item with querySelectorAll
all_lis[0].remove();

//Remove child element
ul_list.removeChild(all_lis[3]);

//Classses and attributes
const firstLi = document.querySelector('li:first-child');
const firstLiChild = firstLi.children[0];

//Classes
val = link.className;
val = link.classListl;
val - link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = firstLiChild;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title'); //boolean
link.removeAttribute('title');

console.log(newHeading);

// // ################
// // #EVENT LISTENERS & THE EVENT OBJECT
// // ################

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');

// e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  val = e;

  //Prevent default behavior
  e.preventDefault();

  //Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  //Event type
  val = e.type;

  //Timestamp
  val = e.timeStamp;

  //Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  //Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

// // ################
// // #MOUSE EVENTS
// // ################

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);

// // can fire from children element
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// // will only fire from parent element
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);

card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e) {
  console.log(e);
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
