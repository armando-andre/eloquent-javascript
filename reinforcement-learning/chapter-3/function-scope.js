// Create a global variable globalVar and set its value to "I am global".
// Write a function called scopeTest. Inside this function:
//     Create a local variable localVar and set its value to "I am local".
//     Print both globalVar and localVar to the console from inside the function.
// Call the scopeTest function.
// Now, try to print localVar to the console from outside the function. Observe the error you get and understand why it happens.

const globalVar = "I am global";

function scopeTest() {
  const localVar = "I am local";

  console.log(globalVar, "\n", localVar);
}

scopeTest();
console.log(localVar); // Expect to have a ReferenceError: localVar is not defined
