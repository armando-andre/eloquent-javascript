// Make the Group class from the previous exercise iterable.
// Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array.
// That would work, but it defeats the purpose of this exercise.

class GroupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = {
        value: this.group.members[this.position],
        done: false,
      };

      this.position++;

      return result;
    }
  }
}

class Group {
  constructor(collection = []) {
    this.members = [];

    for (let value of collection) {
      this.add(value);
    }
  }

  static from(collection) {
    return new Group(collection);
  }

  has(value) {
    return this.members.includes(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((item) => item != value);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
