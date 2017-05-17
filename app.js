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
var sales = [];

//For each time at each store, tell me the random # of people and the random # * avg cookies per hour
//THIS IS WHERE I GET CONFUSED
//So take the avgCust function and multiply by the avgCookies
//loop through times (although we're not actually using them)
for (var times = 6, times < 21; times+);
//declaring a new function
  var cookiesAtTime = new function () {
    //take avgCust and multiply by avgCookies
    Store.prototype.avgCust() * this.avgCookies;
    //console.log it
    console.log(cookiesAtTime);
    //return it
    return cookiesAtTime;
};

//I need to apply the function above to stores??


//What I need to do:
//Loop thru the times
//in the loop, tell me:
//what is the random # of customers & return this value & console.log it
//what is the number of cookies sold (avgCookies * random # customers) & return this value and console.log it
//push the number of cookies sold (by hour) into the empty sales array

//Total sales
//Use a method (I don't know which one) to add all the things in the array together

//push total sales into the DOM


//make a table and put all the stores in it
//create table
var table = document.getElementbyID('shell');

//empty array to put our data in
var data = [];

//push each store into a td
for (var i = 0; i < stores.length; i++) {
  data.push(
    '<td>' + stores[i].name + '</td>',
    '<td>' + stores[i].max + '</td>',
    '<td>' + stores[i].min + '</td>',
    '<td>' + stores[i].avgCookies + '</td>'
  )
}

//declare a row variable
var new_row;

//Make new_row be a tr, then put our data array in there
for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row = data[j];
  table.appendChild(new_row);
}
