//Object for location
var location = {
  //name of the place
  name: 'FirstAndPike',
  //list of the mins for all hours for the location
  min: 23,
  //list of the maxs for all hours for the location
  max: 65,
  //this is their average cookie sales for the whole day usually
  regCookieSales: 6.3,
  //function called averagePeoplePerHour
  averagePeoplePerHour: function () {
    //we'll take the max + min and divide by 2 to find the average - then multiply it by math.random to generate a random number that's rounded down.
    //to get a random number between 65 and 23, we have to set 23 as 0 -so we add the minimum so we always have at least 23.
    math.floor(math.random()*(max - min) + min));
    return averagePeoplePerHour;
  },
  averageCookieSales: function () {
    console.log(regCookieSales * averagePeoplePerHour());
  },
};

//at six am, they need a random number of people


//to call a function example: location.averagePeoplePerHour();

//blank array
var arr = [];
var container = document.createElement('div');
container.innerHTML = '<p>'
