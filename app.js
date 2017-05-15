//Object for location
//we have a location
var location = {
  //name of the place
  name: 'FirstAndPike'
  //list of the mins for all hours for the location
  min: 23,
  //list of the maxs for all hours for the location
  max: 65,
  regCookieSales: 6.3,
  //function called averagePeoplePerHour, where min/max[i] are the parameters
  averagePeoplePerHour: function () {
    math.random((this.max - this.min) +this.min);
    //console log the result of the function
    console.log(averagePeoplePerHour);
    //console log the iteration# (0 will be 6am)
    console.log(i);
    }
  // averageCookiesPerHour: function (this.) //<-- repeat above except with cookies
  // }

//to call the function, use location.averagePeoplePerHour();

//blank array
var arr = [];
var container = document.createElement('div');
container.innerHTML = '<p>'
