// Create a new array containing the names of people who are older than 30.

import { people } from "./people.js";

const older = people.filter((person) => person.age > 30);
const names = older.map((person) => person.name);

console.log(names);
