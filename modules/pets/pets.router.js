const express = require("express");
const Pets = require("./pets.service");
const router = express.Router();

router
  .route("/cat")
  .get((req, res) => {
    // Return all pets currently up for adoption.
    const cat = Pets.getNextCat();
    res.json(cat);
  })
  .delete((req, res) => {
    const removedAnimal = Pets.dequeue("cat");
    //using this enqueue to keep the list of animals to adopt never ending
    Pets.enqueue("cat", removedAnimal);
    res.status(204).end();
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
    //using this enqueue to keep the list of animals to adopt never ending
    Pets.enqueue("dog", removedAnimal);
    res.status(204).end();
  });

module.exports = router;
