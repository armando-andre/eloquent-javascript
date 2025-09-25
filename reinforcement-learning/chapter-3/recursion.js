// Write a recursive function named countDown that takes a number as a parameter.
//     Base Case: If the number is 0 or less, it should print "Blastoff!".
//     Recursive Step: If the number is greater than 0, it should print the number and then call itself with the number minus 1.

function countDown(number) {
  if (number < 0) {
    console.log("Blastoff!");
  } else {
    console.log(number);
    countDown(number - 1);
  }
}
