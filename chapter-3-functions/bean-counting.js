// Bean Counting
// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters).
// Rewrite countBs to make use of this new function.

const countChar = (userInput, letterToLookFor) => {
  let charactersCounter = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === letterToLookFor) {
      charactersCounter++;
    }
  }

  return charactersCounter;
};

const countBs = (userInput) => {
  return countChar(userInput, "B");
};
