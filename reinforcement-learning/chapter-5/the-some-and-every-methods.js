// Write a line of code that checks if some of the people are younger than 20. It should print true.
// Write a line of code that checks if every person is older than 20. It should print false.

import { people } from "./people.js";

const youngerVerification = people.some((person) => person.age < 20);
const olderVerification = people.every((person) => person.age > 20);

console.log(youngerVerification);
console.log(olderVerification);
