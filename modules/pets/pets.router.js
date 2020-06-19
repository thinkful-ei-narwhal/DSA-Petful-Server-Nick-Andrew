const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router
  .route("/cat")
  .get((req, res, next) => {
    // Return all pets currently up for adoption.
    const cat = Pets.getNextCat();
    res.json(cat);
  })
  .delete((req, res) => {
    const removedAnimal = Pets.dequeue("cat");
    res.status(204).json(removedAnimal).end();
  });

router
  .route("/dog")
  .get((req, res) => {
    // Return all pets currently up for adoption.
    const dog = Pets.getNextDog();
    res.json(dog);
  })
  .delete((req, res) => {
    const removedAnimal = Pets.dequeue("dog");
    res.status(204).json(removedAnimal).end();
  });

module.exports = router;
