// FizzBuzz
// Instructions: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

for (let counter = 1; counter <= 100; counter++) {
  let output = "";

  if (counter % 3 === 0) {
    output += "Fizz";
  }
  if (counter % 5 === 0) {
    output += "Buzz";
  }

  console.log(output || counter);
}
