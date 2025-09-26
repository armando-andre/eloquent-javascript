// Create a class called Rectangle.
// The constructor should accept width and height.
// Create a getter named area. When you access myRectangle.area, it should return the result of this.width * this.height without you needing to call it like a function area().
// Create an instance of Rectangle and print its area to the console.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(10, 10);

console.log(myRectangle.area);
