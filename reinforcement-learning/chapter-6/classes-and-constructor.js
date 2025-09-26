// Create a Cat class.
// The constructor should accept one argument, name, and store it in a this.name property.
// Add a method to the class called speak that prints a message to the console, like "Milo says meow." using the cat's name.
// Create a new instance of the Cat class and call its speak method.

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " says meow.";
  }
}

const cat = new Cat("Milo");

console.log(cat.speak());
