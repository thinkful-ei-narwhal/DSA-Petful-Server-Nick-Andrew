const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const people = People.getAllPeople();
    res.json(people);
  })
  .delete(json, (req, res) => {
    const removedPerson = People.dequeue();
    res.status(204).json(removedPerson).end();
  });

router.post("/:name", json, (req, res) => {
  // Add a new person to the queue.
  const personQueued = People.enqueue(req.params.name);
  res.json(personQueued);
});

module.exports = router;
