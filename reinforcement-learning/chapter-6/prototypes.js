// Create a plain object called humanPrototype that has one method: greet, which prints "Hello, I am a human.".
// Use Object.create(humanPrototype) to create a new object called person.
// Add a name property to your new person object.
// Call the greet method on your person object. Even though person doesn't have a greet method itself, it should find it on its prototype.

const humanPrototype = {
  greet() {
    console.log("Hello, I am a human.");
  },
};

const person = Object.create(humanPrototype);

person.name = "Max";

person.greet();
console.log(person.name);
