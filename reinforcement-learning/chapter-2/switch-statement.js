// Create a variable dayOfWeek and set it to "Monday".
// Write a switch statement that checks the value of dayOfWeek.
//     For "Saturday" and "Sunday", print "It's the weekend!".
//     For "Friday", print "Almost the weekend!".
//     For the default case (any other day), print "It's a weekday."
// Make sure to include a break after each case to prevent the code from "falling through".

let dayOfWeek = "Sunday";

switch (dayOfWeek) {
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  case "Friday":
    console.log("Almost the weekend");
    break;
  default:
    console.log("It's a weekday.");
}
