//Constructor function for our store
function Store (name, max, min, avgCookies) {
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
}

//method for getting random customers - I'm not sure why this isn't working
//It may have to do with the fact that we are calling the function on the prototype
Store.prototype.avgCust = function () {
  var customers = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  console.log(customers);
  return customers;
};

//Let's make the stores
var pike = new Store ('First and Pike', 65, 23, 6.3);
var seaTac = new Store ('SeaTac Airport', 24, 3, 1.2);
var seattleCenter = new Store ('Seattle Center', 38, 11, 3.7);
var capHill = new Store ('Capitol Hill', 38, 20, 2.3);
var alki = new Store (16, 2, 4.6);

//Now let's put the stores in one array - I don't know why, seems like a good idea
var stores = [pike, seaTac, seattleCenter, capHill, alki];

//let's just console log to see if the stores worked right
console.log(capHill.avgCookies);
//yay, it's working!

//Let's list all the times that the stores are open
var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Let's make an empty array we can pass some data into - seems like a good idea
var empty = [];

//For each time at each store, tell me the random # of people and the random # * avg cookies per hour
//So take the avgCust function and multiply by the avgCookies
for (var i = 6, i < 21; i++);
  var cookiesAtTime = new function () {
    Store.prototype.avgCust() * this.avgCookies;
    console.log(cookiesAtTime);
    return cookiesAtTime;
};

//I need to apply the function above to stores.




// for (var i in array) {
//   alert(array[i]);
// }


// for (var prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }



// stores.forEach( function (avgCookies)
// {
//   var x = store.avgCookies;
//   alert(x);
// });

// var randoCust = (Math.floor(Math.random() * (this.max - this.min)) + this.min)
//variable for the times that stores are open
// var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
