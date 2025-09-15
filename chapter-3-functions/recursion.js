// Recursion
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(userInput) {
  if (userInput < 0) {
    return;
  }

  if (userInput === 0) {
    return true;
  } else if (userInput === 1) {
    return false;
  } else {
    return isEven(userInput - 2);
  }
}
