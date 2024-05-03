const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server has start on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Welcome to my first Node.js server. APIs available:
  <a href="/strings">Strings API</a>,
  <a href="/objects">Objects API</a>,
  <a href="/arrays">Array API</a>`);
});

app.get("/strings", (req, res) => {
  res.json(" I would be a great developer");
});


app.get("/arrays", (req, res) => {
  res.json([
    { country: "Israel", resource: "Agriculture", job: "Farmers" },
    { country: "Nigeria", resource: "Oil", job: "Exporters" },
    { country: "Sweden", resource: "gold", job: "product manager" }
  ]);
});

app.get("/objects", (req, res) => {
    res.json({name: "Christopher", yearsOfExperience: 2, job: "Fullstack developers"});
  });