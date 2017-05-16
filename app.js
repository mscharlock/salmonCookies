//Object for location
var location = {
  //name of the place
  name: 'First And Pike',
  //list of the mins for all hours for the location
  min: 23,
  //list of the maxs for all hours for the location
  max: 65,
  //this is their average cookie sales for the whole day usually
  regCookieSales: 6.3,
  //function called averagePeoplePerHour
  randomCrowd: function () {
    //we'll take the max + min and divide by 2 to find the average - then multiply it by math.random to generate a random number that's rounded down.
    //to get a random number between 65 and 23, we have to set 23 as 0 -so we add the minimum so we always have at least 23.
    var customers = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    console.log(customers);
    return customers;
    //show us the average # per hour
  },
  //Averrage cookie sales function
  averageCookieSales: function () {
    //log to the console their regular sales * the random people per hour
    console.log(this.regCookieSales * this.randomCrowd());
  },
  //hours they are open in military time
  hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  //cookies sold at each hour
  peopleAtHour: function () {
    for (var i=this.hours[0]; i<this.hours[19]; i++) {
      console.log('# people was: ' +this.randomCrowd);
    }
  },
  cookiesAtHour: function () {
    for (var i=this.hours[0]; i<this.hours[19]; i++) {
      console.log(' number of cookies sold was: '+ this.averageCookieSales);
    }
  }
};
location.randomCrowd();

function domForCookies () {
  var container = document.createElement('div');
  container.innerHTML='<p>'+ location.cookiesAtHour + '</p>';
  document.body.appendChild(container);
}

domForCookies();

function domForPeople() {
  var container1 = document.createElement('div');
  container1.innerHTML='<p>' + location.peopleAtHour + '<p>';
  document.body.appendChild(container1);
}

domForPeople();
