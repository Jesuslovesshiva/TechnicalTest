function nextInLine(arr, item) {
  // Your code here
  arr.push(item); 

  return arr.shift();
}
  // Only change code above this line


// Setup
let hi = [8, 9, 10 ];
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Next In Line | -_-