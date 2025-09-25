// Write a for loop that counts from 1 to 20.
// Inside the loop, use an if statement to check if the current number is 13.
// If the number is 13, print "Uh oh, unlucky number!" and use the break keyword to stop the loop immediately.
// If the number is not 13, just print the number itself.

for (let i = 1; i < 20; i++) {
  if (i === 13) {
    console.log("Uh oh, unlucky number!");
    break;
  } else {
    console.log(i);
  }
}
