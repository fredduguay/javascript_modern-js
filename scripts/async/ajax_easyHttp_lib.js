function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make and HTTP GET Request

easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //action can be passed as callback

      //callback(error parameter, response)
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

//Make and HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make and HTTP PUT Request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make and HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //action can be passed as callback

      //callback(error parameter, response)
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
