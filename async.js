// ################
// #ASYNCHRONOUS JAVASCRIPT
// ################

//AJAX AND JSON

//Load single customer
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

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

  xhr_r.open('GET', 'customers.json', true);

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
