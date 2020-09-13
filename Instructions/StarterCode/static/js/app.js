// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(element =>{
  console.log(element)
})

data.forEach(element =>{
  console.log(Object.entries(element))
});

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

d3.select("table").attr("class", "table table-striped table-hover");