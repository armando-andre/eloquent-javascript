// Create a JavaScript object, like the book object from Exercise 3.
// Use JSON.stringify() to convert the object into a JSON string and print the string.
// Use JSON.parse() on the string you just created to convert it back into an object, and print the resulting object.

let book = {
    title: "The Name of the Wind",
    author: "Patrick Ruthfuss",
    pages: 662,
  },
  stringify = JSON.stringify(book),
  parse = JSON.parse(stringify);

console.log(stringify, "\n", parse);
