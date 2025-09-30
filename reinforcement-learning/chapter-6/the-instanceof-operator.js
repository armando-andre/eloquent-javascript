// Using the Animal and Dog classes from the previous exercise:
// Create a Dog instance.
// Write three console.log statements to check the following:
//     Is the instance an instanceof Dog?
//     Is the instance an instanceof Animal?
//     Is the instance an instanceof Object? (All objects in JavaScript inherit from Object).

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Tobby");

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Object);
