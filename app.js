//Object for loc
var loc = {
  //name of the place
  name: 'First And Pike',
  //list of the mins for all hours for the loc
  min: 23,
  //list of the maxs for all hours for the loc
  max: 65,
  //this is their average cookie sales for the whole day usually
  regCookieSales: 6.3,
  //hours the store is open
  hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    console.log(customers);
    return customers;
    },

  //Average cookie sales function
  averageCookieSales: function () {
    //log to the console their regular sales * the random people per hour
    var cookiez = console.log(this.regCookieSales * this.randomCrowd());
    return cookiez;
  },
  //cookies sold at each hour
  peopleAtHour: function () {
    for (var i = 0; i < this.hours.length; i++) {
      console.log('# people was: ' +this.randomCrowd);
    }
  },
  cookiesAtHour: function () {
    for (var i = 0; i < this.hours.length; i++) {
      var salesHour = Math.floor(this.randomCrowd() * this.regCookieSales);
      console.log(salesHour);
      return salesHour;
    }
  }
};//cookies sold at each hour

var peopleAtHour = new function () {
  for (var i = 0; i < this.hours.length; i++) {
    console.log('# people was: ' +this.randomCrowd);
  }
};

loc.peopleAtHour();

var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var cookiesAtHour= new function () {
  for (var i=0; i<hours.length; i++) {
    var salesHour = Math.floor(this.randomCrowd() * this.regCookieSales);
    console.log(salesHour);
    return salesHour;
  }
};

loc.cookiesAtHour();

// //Hint code from Cristina
// cookieSale = function() {
//     for (var i = 0; i < hours.length; i++) {
//       var salesHour = Math.floor(this.getCustomersPerHour() * this.averageCookiesSoldPerCustomer); }

loc.randomCrowd();

//put CookiesAtHour in the DOM
function domForCookies () {
  var container = document.createElement('div');
  container.innerHTML='<p>'+ loc.cookiesAtHour + '</p>';
  document.body.appendChild(container);
}

domForCookies();


//Put peopleAtHour in the dom
function domForPeople() {
  var container1 = document.createElement('div');
  container1.innerHTML='<p>' + loc.peopleAtHour + '<p>';
  document.body.appendChild(container1);
}

domForPeople();
