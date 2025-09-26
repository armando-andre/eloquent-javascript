// Using the find method, find the first person in the array whose name is "Charlie". Print the entire person object.

import { people } from "./people.js";

const findPerson = people.find((person) => person.name === "Charlie");

console.log(findPerson);
