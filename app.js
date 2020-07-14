const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// require a module and it is located at the current directory
// when we use require, it will try to go to data.js and run the code
// console.log(date());

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs"); // tells our app which is generated using Express to use EJS as its view engine.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // put css file on local host

app.get("/", function (req, res) {
  //   let day = date.getDate(); //datemodule
  let day = date.getDay(); //datemodule

  res.render("list", { listTitle: day, newListItems: items }); //ejs
});

//pass the data into the server
app.post("/", function (req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  // when a post request is triggered on our home route,
  // we will save the value of newItem in that text box, item
  //it will redirect to the home route
  // get us over app.get("/", function (req, res),
  // and trigger the app.get for our home route
  // and it will res.render the list templete passing in both kindofDay,newList
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(4000, function () {
  console.log("Server started on port 4000.");
});
