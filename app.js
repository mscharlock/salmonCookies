//Constructor function for our store
function Store (name, max, min, avgCookies) {
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
}

//method for getting random customers
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
var alki = new Store ('Alki', 16, 2, 4.6);

//Now let's put the stores in one array - so we can loop through them later
var stores = [pike, seaTac, seattleCenter, capHill, alki];

//Let's list all the times that the stores are open
var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Let's make an empty array we can pass some data into - seems like a good idea
var sales = [];

//For each time at each store, tell me the random # of people and the random # * avg cookies per hour
//THIS IS WHERE I GET CONFUSED
//So take the avgCust function and multiply by the avgCookies
//loop through times (although we're not actually using them)
for (var i = 0; i < times.length; i++) {
  var cookiesAtTime = new function () {
    //take avgCust and multiply by avgCookies
    Store.prototype.avgCust() * this.avgCookies;
    //console.log it
    console.log(cookiesAtTime);
    //return it
    return cookiesAtTime;
  };
}


//Let's list all the times that the stores are open
var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Loop thru the times to get the sales of cookies per hour
Store.prototype.generateSales = function () {
  for (var i = 0; i < times.length; i++) {
    //give me the random#people * avg daily cookies sold
    var cookiesAtHour = Math.floor(this.avgCust() * this.avgCookies);
    console.log(cookiesAtHour);
    //push that list of totals into a variable we'll call salesCalc
    this.salesCalc.push(cookiesAtHour);
    this.totalSales += cookiesAtHour; //note to self: Claire helped with this quite a bit. += is the previous thing plus whatever comes after it added together. What we're doing here is making generateSales() give us the daily total of sales
  }
};


//let's render the table as a function
function renderTable() {
  //select the table element
  var table = document.getElementById('tablething');
  var data = []; //empty array

//loop through the stores
  for (var i = 0; i < stores.length; i++) {
    data.push( //push the below values into the empty data array
      '<td>' + stores[i].name + '</td>' + //each property of the store objects gets it's own td
      '<td>' + stores[i].max + '</td>' +
      '<td>' + stores[i].min + '</td>' +
      '<td>' + stores[i].avgCookies + '</td>' +
      '<td>' + stores[i].generateSales() + '</td>' + //this isn't quite right but it's close
      '<td>' + stores[i].totalSales + '</td>' );
  }

  var new_row; //we have to put the tds in a row

//loop through the data array
  for (var j = 0; j < data.length; j++) {
    new_row = document.createElement('tr'); //the new row is a row
    new_row.innerHTML = data[j]; //inside the new row, put the data array stuff
    table.appendChild(new_row); //put all that in the table in the DOM
  }
}

renderTable();
