// Create a function greet that takes a parameter name.
// Set the default value for name to be "stranger".
// The function should return the string "Hello, [name]!".
// Call the function once with a name, and once without a name, and print both results to see the default parameter in action.

function greet(name = "stranger") {
  return "Hello, " + name;
}

console.log(greet("Bob"));
