// ################
// #NON ASYNC
// ################
// class EasyHTTP {
//   //Make an HTTP GET Request
//   get(url) {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
// }

// ################
// #ASYNC WITH PROMISE
// ################

// class EasyHTTP {
//   //Make an HTTP GET Request
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }

//   //Make an HTTP POST Request
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then((res) => res.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }

//   //Make an HTTP PUT Request
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then((res) => res.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }

//   //Make an HTTP DELETE Request
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       })
//         .then((res) => res.json())
//         .then((data) => resolve('Resource deleted'))
//         .catch((err) => reject(err));
//     });
//   }
// }

// ################
// #ASYNC & AWAIT
// ################

class EasyHTTP {
  //Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  //Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  //Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource deleted';
    return resData;
  }
}
