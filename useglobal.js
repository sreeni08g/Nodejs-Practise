// var stuff = require("./global");

// console.log(stuff.counter([1, 23, 421, 12, 421]));
// console.log(stuff.add(1, 13));

var express = require("express");

var app = express();

app.get("/", function(req, res) {
  //   res.writeHead(200, { "Content-Type": "Text/Plain" });
  res.send("Hi this is Sreenivaasan");
});
app.get("/contact", function(req, res) {
  //   res.writeHead(200, { "Content-Type": "Text/Plain" });
  res.send("Hi this is Contact page");
});
app.listen(3000, function(err) {
  if (err) throw err;
});
console.log("Server running at port 3000");
