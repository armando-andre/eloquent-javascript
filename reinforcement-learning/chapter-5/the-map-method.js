// Using the map method, create a new array that contains just the names of all the people. The result should be ['Alice', 'Bob', 'Charlie', 'David', 'Eve']. Print the new array.

import { people } from "./people.js";

const names = people.map((person) => person.name);

console.log(names);
