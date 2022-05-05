// ################
// #XHR
// ################

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', '../data/data.txt', true);

  //ReadyStateChange 1
  //   console.log('READYSTATE', xhr.readyState);

  //Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    //spinner/loader
    console.log('READYSTATE', xhr.readyState);
  };
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log('READYSTATE', xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onerror = function () {
    console.log('Request error');
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

// ################
// #AJAX AND JSON
// ################

//Load single customer
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../data/customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `<ul>
    <li> ID: ${customer.id}</li>
    <li> Name: ${customer.name}</li>
    <li> Company: ${customer.company}</li>
    <li> Phone: ${customer.phone}</li>
    </ul>`;

      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

//Load multiple customers

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  const xhr_r = new XMLHttpRequest();

  xhr_r.open('GET', '../data/customers.json', true);

  xhr_r.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output;

      customers.forEach(function (customer) {
        output += `<ul>
          <li> ID: ${customer.id}</li>
          <li> Name: ${customer.name}</li>
          <li> Company: ${customer.company}</li>
          <li> Phone: ${customer.phone}</li>
          </ul>`;
      });

      document.getElementById('customers').innerHTML = output;
    }
  };

  xhr_r.send();
}

// ################
// #CALLBACK FUNCTIONS
// ################

// const posts = [
//   { title: 'Post One', body: 'This is post #1' },
//   { title: 'Post Two', body: 'This is post #2' }
// ];

//Synchronous function
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

//Asynchronous function

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

// createPost({ title: 'Post three', body: 'This is post #3' });

// getPosts();

// ################
// #PROMISES
// ################

const posts = [
  { title: 'Post One', body: 'This is post #1' },
  { title: 'Post Two', body: 'This is post #2' }
];

function createPost(post, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error, something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

//then = resolve ,  catch = reject
// createPost({ title: 'Post three', body: 'This is post #3' })
//   .then(getPosts)
//   .catch(function (err) {
//     console.log(err);
//   });

// ################
// #FETCH API
// ################

document.getElementById('buttonA').addEventListener('click', getText);
document.getElementById('buttonB').addEventListener('click', getJson);
document.getElementById('buttonC').addEventListener('click', getExternal);

//Get local text file data | No arrow function
function getText() {
  fetch('../../data/data.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Get local text file data | Arrow function

function getText() {
  fetch('../../data/data.txt')
    .then((res) => res.text)
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

//Get local json data | No arrow function
function getJson() {
  fetch('../../data/posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Get local json data | Arrow Function
function getJson() {
  fetch('../../data/posts.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

//Get from external API | No arrow function
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

//Get from external API | Arrow function
function getExternal() {
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// ################
// #FETCH API
// ################

// No arrow function
// const sayHello = function()  {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// };

//One line function does not need curly braces
// const sayHello = () => console.log('Hello');

//One line returns
// const sayHello = () => 'Hello';

//Same as above
// const sayHello = function() {
//   return 'Hello';
// }

//Return object
// const sayHello = () => ({msg: 'Hello'})

//Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// No arrow function
// const nameLenghts = users.map(function (name) {
//   return name.length;
// });

//Shorter
// const nameLenghts = users.map((name) => {
//   return name.length;
// });

//Shortest
const nameLenghts = users.map((name) => name.length);

console.log(nameLenghts);

// ################
// #ASYNC & AWAIT
// ################

// function myFunc() {
//   return 'Hello';
// }

// console.log(myFunc());

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  //away response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //Only proceed once it's resolved
  const data = await response.json();

  //Only proceed once seconde promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
