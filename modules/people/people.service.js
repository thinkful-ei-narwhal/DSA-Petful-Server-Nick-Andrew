const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

function serializePerson(personName) {
  return {
    name: personName,
  };
}

// --------------------

module.exports = {
  getAllPeople() {
    const peopleInQueue = people.all();
    console.log("TESTING", people);
    const peopleSerialized = peopleInQueue.map((people) => {
      return serializePerson(people.value);
    });
    return peopleSerialized;
  },
  enqueue(personName) {
    people.enqueue(personName);
    return serializePerson(personName);
  },
  dequeue() {
    const person = people.dequeue();
    const peopleSerialized = serializePerson(person.value);
    return peopleSerialized;
  },
};
