// Using the filter method, create a new array that contains only the people who live in "New York". Print the new array.

import { people } from "./people.js";

const city = people.filter((person) => person.city === "New York");

console.log(city);
