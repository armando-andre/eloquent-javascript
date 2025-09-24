// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }

  return true;
}

function every(array, test) {
  return array.some((element) => element);
}
