// Using the forEach method on the people array, print a sentence for each person, like "Alice is 21 years old."

import { people } from "./people.js";

people.forEach((person) =>
  console.log(person.name + " is " + person.age + " years old.")
);
