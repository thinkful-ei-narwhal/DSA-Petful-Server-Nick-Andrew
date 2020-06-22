# Petful Server
Authors
Nicholas Evelson
Andrew Durrant

# API calls
## pets
GET http://petful-app-nick-andrew.herokuapp.com/api/pets/dog > Gets the next dog up for adoption
GET http://petful-app-nick-andrew.herokuapp.com/api/pets/cat > Gets the next cat up for adoption
DELETE http://petful-app-nick-andrew.herokuapp.com/api/pets/dog > dequeues the current dog up for adoption
DELETE http://petful-app-nick-andrew.herokuapp.com/api/pets/cat > dequeues the current cat up for adoption

## people
GET http://petful-app-nick-andrew.herokuapp.com/api/people > Gets all people in the adoption queue
POST http://petful-app-nick-andrew.herokuapp.com/api/people > Enqueues a person in the adoption queue

> Example body: { "name": "person-name" }
> DELETE http://petful-app-nick-andrew.herokuapp.com/api/people > dequeues the current person at the front of the queue

# Tech stack:
-Javascript
-NodeJS
-Express