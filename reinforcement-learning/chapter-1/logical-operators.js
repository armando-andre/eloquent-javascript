// You are deciding if you should go to the park. You will go if it is sunny (isSunny) AND you don't have work (!hasWork).
//   1. Create two boolean variables: isSunny (set to true) and hasWork (set to false).
//   2. Write a single line of code using logical operators to determine if you should go to the park.

const isSunny = true,
  hasWork = false;

isSunny && !hasWork
  ? console.log("Go to the park.")
  : console.log("Can't go to the park.");
