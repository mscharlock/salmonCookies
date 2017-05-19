var form = document.getElementById('store_form');
var table = document.getElementById('tablething');

//Constructor function for our store
function Store (name, max, min, avgCookies) {
  this.name=name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
  this.salesCalc = [];
  this.totalSales = 0;
}

//method for getting random customers
Store.prototype.avgCust = function () {
  var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
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

//For each time at each store, tell me the random # of people and the random # * avg cookies per hour
//THIS IS WHERE I GET CONFUSED
//So take the avgCust function and multiply by the avgCookies
//loop through times (although we're not actually using them)
Store.prototype.cookiesAtTime = function () {
  for (var i = 0; i < times.length; i++){
  //take avgCust and multiply by avgCookies
  //return it
    this.salesCalc.push(Math.floor(this.avgCust() * this.avgCookies));
  }
  return this.salesCalc;
};


// Loop thru the times to get the sales of cookies per hour
Store.prototype.generateSalesTotals = function () {
  for (var i = 0; i < this.salesCalc.length; i++) {
    // //give me the random#people * avg daily cookies sold
    // var cookiesAtHour = Math.floor(this.avgCust() * this.avgCookies);
    // console.log(cookiesAtHour);
    // //push that list of totals into a variable we'll call salesCalc
    // this.salesCalc.push(cookiesAtHour);
    this.totalSales += this.salesCalc[i]; //note to self: Claire helped with this quite a bit. += is the previous thing plus whatever comes after it added together. What we're doing here is making generateSales() give us the daily total of sales
  }
  return this.totalSales;
};

//let's render some of the table as a function


//loop through the stores and put in the first four values into the table
  // for (var i = 0; i < stores.length; i++) {
  //   data.push( //push the below values into the empty data array
  //     '<td>' + stores[i].name + '</td>' + //each property of the store objects gets it's own td
  //     '<td>' + stores[i].max + '</td>' +
  //     '<td>' + stores[i].min + '</td>' +
  //     '<td>' + stores[i].avgCookies + '</td>');
  //   console.log('data is: '+ data);
  // }
  // var new_row; //we have to put the tds in a row

//loop through the data array
//   for (var j = 0; j < data.length; j++) {
//     new_row = document.createElement('tr'); //the new row is a row
//     new_row.innerHTML = data[j]; //inside the new row, put the data array stuff
//     table.appendChild(new_row); //put all that in the table in the DOM
//   }
// }

//Inserting the other loop into the table

Store.prototype.renderTable = function() {
  //select the table element
  var table = document.getElementById('tablething');
  var timesForCookies = this.cookiesAtTime();
  var timesData = [];

  var headerPlaces = document.getElementById('headers');
  var headersForTable = ['Store location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  var blankArr = [];
  for (var q = 0; q < headersForTable.length; q++) {
    blankArr.push('<td>' + headersForTable[q] + '</td>')
  }


  timesData.push('<td>' + this.name + '</td>' );
  for (var k = 0; k < timesForCookies.length; k++) {
    timesData.push('<td>' + timesForCookies[k] +'</td>');
  }
  timesData.push('<td>' + this.generateSalesTotals() + '</td>' );

  var header_row;//row for the headersForTable
  var new_row; //we have to put the tds in a row



//Put in the headers
  header_row = document.createElement('tr');
  header_row.innerHTML = headersForTable.join('');
  table.appendChild(blankArr);

//loop through the data array
  new_row = document.createElement('tr'); //the new row is a row
  new_row.innerHTML = timesData.join(''); //inside the new row, put the data array stuff
  table.appendChild(new_row); //put all that in the table in the DOM


};


var emptyArr = []; //this is where I'll put the new stores generated by the form
//function for the event when we submit the button
function formData(event) {
//don't do the default when we submit
  event.preventDefault();
 //Write some variables which can represent the values in the form fields
  var max_ppl_day= parseInt(event.target.max_ppl_day.value);
  var min_ppl_day= parseInt(event.target.min_ppl_day.value);
  var cookies_sold_day= parseInt(event.target.cookies_sold_day);
//put Stores in our empty array
  emptyArr.push(new Store(max_ppl_day, min_ppl_day, cookies_sold_day));

  form.reset(); //each time we submit, empty the form fieldsets
}


 // let's define createTable function
// function createTable () {
//   var row; //declaring an empty variable of row
//   row = document.createElement('tr'); //make row a row in our table
//   row.innerHTML = '<td>' + emptyArr.max_ppl_day + '</td>' + '<td>' + emptyArr.min_ppl_day + '</td>' +'<td>' + emptyArr.cookies_sold_day + '</td>';
//   table.appendChild(row); //put our tds in the row & add it to the DOM
// }


//FINALLY LET'S ADD THE EVENT LISTENER!!
form.addEventListener('submit', formData);
// createTable();

for (var i = 0; i < stores.length; i++) {
  stores[i].renderTable();
}
