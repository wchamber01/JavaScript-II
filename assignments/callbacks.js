// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Gum', 'Banana', 'Eraser'];

/* 
  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// last passes the last item of the array into the callback.
function last(array, callback) {
  callback(array[3]); //How do I do this with array.length-1 ???
}
last(items, (last) => {
  console.log(last);
})

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, callback) { 
  callback = x+y;
  return callback;
}
sumNums();
console.log(sumNums(2,3))

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, callback) {
  callback = x*y;
  return callback; 
}
multiplyNums();
console.log(multiplyNums(3,4))

// contains checks if an item is present inside of the given array/list.
function contains(item, list, cb) {
  if (items.length > 0) {
  return cb ='True'// Pass true to the callback if it is, otherwise pass false.
} else {
  return cb = false
}
}
contains()
console.log(contains())

/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

// function removeDuplicates(array, callback) {
//   // let uniqueArray[] = new Set (items)}
//   callback = [...uniqueArray]
// //   console.log(callback)
// // }
// // removeDuplicates(items, ())
// Array.from (new Set (items));
// console.log(Array(items))
