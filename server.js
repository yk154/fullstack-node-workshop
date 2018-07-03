const express = require("express");
const path = require("path");

const insults = [
  "You are bad",
  "Huh?",
  "I dont't want to talk with you",
  "SHITTTT",
  "WTF, Don't do it"
];

const compliments = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function(req, res) {
  res
    .json({
      compliment: getRandomCompliment()
    })
    .end();
});

app.get("/insult", function(req, res) {
  res
    .json({
      insult: getRandomInsult()  
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");



//const express = require("express");
//
//const app = express();
//
//app.get("/", function(req, res) {
//  res.end("Welcome to my site!");
//});
//
//app.get("/compliment", function(req, res) {
//  res.end("You look nice today");
//});
//
//app.listen(3000);
//console.log("listening on http://localhost:3000");


//const http = require("http"); //1
//
//const server = http.createServer(function(req, res) { //2
//  console.log(`user visited ${req.url}`); //3
//  res.end("hello!");
//});
//
//console.log("listening on http://localhost:3000");
//server.listen(3000);
