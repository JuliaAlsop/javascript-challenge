// from data.js
var tableData = data;

// Pulling Data in to table

//Step 1
var tbody = d3.select("tbody");

//Step 2
console.log(data);

//Step 3
data.forEach(element =>{
  console.log(element)
})

//Step 4
data.forEach(element =>{
  console.log(Object.entries(element))
});

//Step 5
data.forEach(element =>{
  let row = tbody.append("tr");
  row.append("td").text(element.datetime);
  row.append("td").text(element.city);
  row.append("td").text(element.state);
  row.append("td").text(element.country);
  row.append("td").text(element.shape);
  row.append("td").text(element.durationMinutes);
  row.append("td").text(element.comments);
})

//Step 6
d3.select("table").attr("class", "table table-striped table-hover");

//////////Filter Setup

// Assign the data from `data.js` to a descriptive variable
var day = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(data);

data.filter.forEach(element =>{
  let row = tbody.append("tr");
  row.append("td").text(element.datetime);
  row.append("td").text(element.city);
  row.append("td").text(element.state);
  row.append("td").text(element.country);
  row.append("td").text(element.shape);
  row.append("td").text(element.durationMinutes);
  row.append("td").text(element.comments);
})

//var ufo = data.filter(ufo => ufo.datetime === inputValue);


//Test it in the console
console.log(ufo);

}