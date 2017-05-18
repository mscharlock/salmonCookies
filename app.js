//Constructor function for our store
function Store (name, max, min, avgCookies) {
  this.name=name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
  this.salesCalc = [];
  this.totalSales = 0;
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
var alki = new Store ('Alki', 16, 2, 4.6);

//Now let's put the stores in one array - I don't know why, seems like a good idea
var stores = [pike, seaTac, seattleCenter, capHill, alki];

//Let's list all the times that the stores are open
var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// What I need to do:
// Loop thru the times
Store.prototype.generateSales = function () {
  for (var i = 0; i < times.length; i++) {
    //give me the random#people * avg daily cookies sold
    var cookiesAtHour = Math.floor(this.avgCust() * this.avgCookies);
    console.log(cookiesAtHour);
    //push that total into salesCalc
    this.salesCalc.push(cookiesAtHour);
    this.totalSales += cookiesAtHour;
  }
};


//now we render the table
function renderTable() {
  var table = document.getElementById('tablething');
  var data = [];

  for (var i = 0; i < stores.length; i++) {
    data.push(
      '<td>' + stores[i].name + '</td>' +
      '<td>' + stores[i].max + '</td>' +
      '<td>' + stores[i].min + '</td>' +
      '<td>' + stores[i].avgCookies + '</td>' +
      '<td>' + stores[i].generateSales() + '</td>' +
      '<td>' + stores[i].totalSales + '</td>' );
  }

  var new_row;

  for (var j = 0; j < data.length; j++) {
    new_row = document.createElement('tr');
    new_row.innerHTML = data[j];
    table.appendChild(new_row);
  }
}

renderTable();












// //loop through the sales and add them all together
// Store.prototype.totalSales = function () {
//   for (var i = 0; i < this.salesCalc.length; i++) {
//     var allSales = this.SalesCalc.reduce(function (a, b) {
//       return a + b;
//     }, 0);
//     console.log(allSales);
//   }
// };

//Using method from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=control#Sum_all_the_values_of_an_array


// in the loop, tell me:
// what is the random # of customers & return this value & console.log it
// what is the number of cookies sold (avgCookies * random # customers) & return this value and console.log it
// push the number of cookies sold (by hour) into the empty sales array
//
// Total sales
// Use a method (I don't know which one) to add all the things in the array together
//
// push total sales into the DOM

//Start making the form stuff
//
// var form = document.getElementById('store_form'); //get the form
// var table = document.getElementById('store_table_info'); //get the table body of store table
// var data = []; //make a blank array
//
// //A Store constructor function
// function Store (max_ppl_day, min_ppl_day, cookies_sold_day) {
//   this.max_ppl_day=max_ppl_day;
//   this.min_ppl_day=min_ppl_day;
//   this.cookies_sold_day=cookies_sold_day;
// //
// //ASK IF WE NEED TO DO THIS?
//   this.all_sales_day=all_sales_day;//This has to be a method that we use within the function to get it to give us the sales for the whole day
// }
//
// //function for the event when we submit the button
// function formData(event) {
//   //don't do the default when we submit
//   event.preventDefault();
// //Write some variables which can represent the values in the form fields
//   var max_ppl_day= event.target.max_ppl_day.value;
//   var min_ppl_day= event.target.min_ppl_day.value;
//   var cookies_sold_day=event.target.cookies_sold_day;
// //put Stores in our empty array
//   data.push(new Store(max_ppl_day, min_ppl_day, cookies_sold_day))
//
//   createTable(); //call createTable function
//
//   form.reset(); //each time we submit, empty the form fieldsets
// }
//
// //let's define createTable function
// function createTable () {
//   var row; //declaring an empty variable of row
//   row = document.createElement('tr'); //make row a row in our table
//   row.innerHTML = '<td>' + data[i].max_ppl_day + '</td>' +
//                   '<td>' + data[i].min_ppl_day + '</td>' +
//                   '<td>' + data[i].cookies_sold_day + '</td>'
//                   //REMEMBER: WE'LL HAVE TO PUT OTHER ROWS IN HERE FOR THE OTHER DATA POINTS
//   table.appendChild(row); //put our tds in the row & add it to the DOM
// }

//FINALLY LET'S ADD THE EVENT LISTENER!!
// form.addEventListener('submit', formData);
