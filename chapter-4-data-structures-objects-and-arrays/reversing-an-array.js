// Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(array) {
  let newArray = [];

  for (let entry of array) {
    newArray.unshift(entry);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  const number = array.length;

  for (let i = 0; i < number; i++) {
    array.splice(i, 0, array[array.length - 1]);
    array.pop();
  }

  return array;
}
