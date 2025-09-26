// Using the reduce method, calculate the total age of all the people in the array.

import { people } from "./people.js";

const totalAge = people.reduce((accumulator, person) => {
  return accumulator + person.age;
}, 0);

console.log(totalAge);
