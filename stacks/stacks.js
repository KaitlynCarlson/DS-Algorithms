// Palindrome Stack

let letters = []; // Stack

let word = "racecar";
let rword = "";

// Put the letters of the word into the stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop off in reverse order

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// Creates a Stack

let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value to the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function (value) {
    if (this.count === 0) {
      return undefined;
    } else {
      this.count--;
      let result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  };

  // Stack size
  this.size = function () {
    return this.count;
  };

  // Return the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push(23);
myStack.push(30);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
