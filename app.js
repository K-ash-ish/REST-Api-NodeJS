const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const port = 3000;
// db created successfully
mongoose.connect("mongodb://localhost:27017/wikiDB");
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Article = mongoose.model("Article", articleSchema);

// const articles = [
//   {
//     title: "REST",
//     content:
//       "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs.",
//   },

//   {
//     title: "API",
//     content:
//       "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.",
//   },

//   {
//     title: "Bootstrap",
//     content:
//       "This is a framework developed by Twitter that contains pre-made front-end templates for web design",
//   },

//   {
//     title: "DOM",
//     content:
//       "The Document Object Model is like an API for interacting with our HTML",
//   },

//   {
//     title: "Jack Bauer",
//     content:
//       "Jack Bauer once stepped into quicksand. The quicksand couldn't escape and nearly drowned.",
//   },
// ];
// Article.insertMany(articles, function(err, docs){});

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (request, response) {
  Article.find({}, function(err, docs){
      response.send(docs);
  })
});

app.listen(port, function (request, response) {
  console.log("Server started at ", port);
});
