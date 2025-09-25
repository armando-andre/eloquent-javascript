// Write a function called createMultiplier that takes one parameter, factor.
// Inside createMultiplier, return a new function.
// This new (inner) function should take one parameter, number, and return the result of multiplying number by the factor from the outer function.
// Create two new functions from your createMultiplier function:
//     One that doubles a number (a "doubler").
//     One that triples a number (a "tripler").
// Use both your new functions to multiply some numbers and print the results.

function createMultiplier(factor) {
  return function multiplyer(number) {
    return number * factor;
  };
}

let doubler = createMultiplier(2);
console.log(doubler(5));

let tripler = createMultiplier(3);
console.log(tripler(5));
