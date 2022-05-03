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

      //callback(error paramenter, response)
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

//Make and HTTP POST Request
//Make and HTTP PUT Request
//Make and HTTP DELETE Request
