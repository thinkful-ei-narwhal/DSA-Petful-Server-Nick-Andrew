const Queue = require("../queue/Queue");
const store = require("../../store");
const { cats, dogs } = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

function serializePet(pet) {
  return {
    imageURL: pet.imageURL,
    imageDescription: pet.description,
    name: pet.name,
    sex: pet.gender,
    age: pet.age,
    breed: pet.breed,
    story: pet.story,
  };
}

// --------------------

module.exports = {
  getAllCats() {
    // Return the pets next in line to be adopted.
    const cats = pets.cats.all();
    const catsSerialized = cats.map((cat) => {
      return serializePet(cat.value);
    });
    return catsSerialized;
  },
  getAllDogs() {
    // Return the pets next in line to be adopted.
    pets.dogs.all();
  },
  getNextCat() {
    const cat = pets.cats.show();
    if (cat !== null) {
      const catSerialized = serializePet(cat.value);
      return catSerialized;
    } else {
      return null;
    }
  },
  getNextDog() {
    const dog = pets.dogs.show();
    if (dog !== null) {
      const dogSerialized = serializePet(dog.value);
      return dogSerialized;
    } else {
      return null;
    }
  },
  dequeue(type) {
    if (type !== "cat" && type !== "dog") {
      throw new Error("Supply the correct type to dequeue");
    }
    return type === "cat"
      ? serializePet(pets.cats.dequeue())
      : serializePet(pets.dogs.dequeue());
  },
};
