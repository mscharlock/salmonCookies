var times= [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var pike= {
  name: 'First And Pike',
  min: 23,
  max: 65,
  regCookieSales: 6.3,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
    }
    this.cookiesArray.push(cookiesNow);
  }
  domForCookies: function () {
    var container = document.createElement('ul');
    document.body.appendChild(container);
    var ulCookies = [];

    for (var i = 0, i < cookiesArray.length; i++) {
      var liElement = document.createElement('li')
      ulCookies.push(this.cookiesArray[i]);
    }
    joinedCookies.push(this.cookiesArray);
    container.innerHTML='<p>'+ this.joinedCookies + '</p>';

  }
};
