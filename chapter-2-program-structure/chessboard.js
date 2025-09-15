// Chessboard
// Instructions: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

let userInput = prompt("Enter board size");
let line1 = "";
let line2 = "";

for (let i = 0; i < userInput; i++) {
  if (i % 2 === 0) {
    line1 += " ";
    line2 += "#";
  } else {
    line1 += "#";
    line2 += " ";
  }
}

for (let i = 0; i < userInput; i++) {
  if (i % 2 === 0) {
    console.log(line1);
  } else {
    console.log(line2);
  }
}
