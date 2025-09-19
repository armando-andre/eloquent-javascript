// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

// Also write a listToArray function that produces an array from a list.

// Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

function arrayToList(array) {
  let list = null;

  for (let i = array.length; 0 < i; i--) {
    list = {
      value: array[i - 1],
      rest: i === array.length ? null : list,
    };
  }

  return list;
}

function listToArray(array) {
  let list = [];

  for (; array; array = array.rest) {
    list.push(array.value);
  }

  return list;
}

function prepend(value, rest) {
  return {
    value,
    rest,
  };
}

function nthIterative(list, target) {
  for (; list; list = list.rest) {
    if (target === 0) {
      return (number = list.value);
    } else {
      target--;
    }
  }

  return undefined;
}

function nthRecursive(list, target) {
  if (!list) {
    return undefined;
  }

  if (target === 0) {
    return (number = list.value);
  } else {
    return nthRecursive(list.rest, target - 1);
  }
}
