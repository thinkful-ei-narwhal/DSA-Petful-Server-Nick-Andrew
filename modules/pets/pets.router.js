const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   // Return all pets currently up for adoption.
//   const cats = Pets.getAllCats();
//   res.json(cats);
// });

router.get("/cat", (req, res, next) => {
  // Return all pets currently up for adoption.
  const cat = Pets.getNextCat();
  res.json(cat);
});

router.get("/dog", (req, res) => {
  // Return all pets currently up for adoption.
  const dog = Pets.getNextDog();
  res.json(dog);
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
