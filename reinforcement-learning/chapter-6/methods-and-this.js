// Create an object called car.
// Give it two properties: brand (a string, e.g., "Ford") and speed (a number, initially 0).
// Add a method called accelerate that takes one argument, amount. This method should add the amount to the speed property.
// Add another method called status that prints a message like "The Ford is going 50 mph." using the brand and speed properties.
// Test your methods: call accelerate(50) and then status().

let car = {
  brand: "Ford",
  speed: 0,

  accelerate(amount) {
    return (this.speed = this.speed + amount);
  },

  status() {
    return "The " + this.brand + " is going " + this.speed + " mph.";
  },
};

console.log(car.accelerate(50));
console.log(car.status());
