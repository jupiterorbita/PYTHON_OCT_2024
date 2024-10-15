/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return


// -------------------------------------------



function nested(arr1, arr2) {
  var expected = [];
  var count = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i < arr1.length) {
      expected.push(arr1[i]);
    }
    for (let x = count; x < arr2.length; x++) {
      expected.push(arr2[x]);
      count++;
      break;
    }
  }
  console.log(expected);
  return expected;
}

nested(arrA1, arrB1);


function interleaveArrays(arr1, arr2) {
  const interleaved = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      interleaved.push(arr1[i]);
    }
    if (i < arr2.length) {
      interleaved.push(arr2[i]);
    }
  }

  return interleaved;
}

function combine(arrA, arrB) {
  var answer = []
  if (arrA.length - arrB.length >= 0) {
    var long = arrA
    var short = arrB
  }
  else {
    var long = arrB
    var short = arrA
  }
  for (var i = 0; i < short.length; i++) {
    answer.push(arrA[i])
    answer.push(arrB[i])
  }
  for (var j = short.length; j < long.length; j++) {
    answer.push(long[j])
  }
  return answer
}


function interleaveArr(arr1, arr2) {
  var newArr = []
  if (arr1.length > arr2.length) { //find the longest array
    var endlength = arr1.length
  }
  else {
    var endlength = arr2.length
  }
  for (var i = 0; i < endlength; i++) {
    if (arr1[i] != undefined) { //as long as there is a value, push it into the new array
      newArr.push(arr1[i])
    }
    if (arr2[i] != undefined) {
      newArr.push(arr2[i])
    }
  }
  return newArr;
}

function interweaveArr(arr1, arr2) {
  var newArr = [];
  if (arr1.length > arr2.length) {
    var looplength = arr1.length;
  }
  else {
    var looplength = arr2.length;
  }
  for (var i = 0; i < looplength; i++) {
    if (i < arr1.length) {
      newArr.push(arr1[i])
    }
    if (i < arr2.length) {
      newArr.push(arr2[i])
    }
  }
  return newArr;
}

/*
  The function takes in two arrays, arr1 and arr2.
  It creates a new empty array called interleaved, which will hold the interleaved values.
  It calculates the maximum length of the two input arrays using Math.max(), which will be used to determine how many times to loop through the arrays.
  It loops through the arrays maxLength number of times, pushing one element from each array into the interleaved array.
  If the loop index i is less than the length of arr1, it pushes the element at index i of arr1 into interleaved.
  If the loop index i is less than the length of arr2, it pushes the element at index i of arr2 into interleaved.
  After the loop is finished, the function returns the interleaved array
*/
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8];

const interleaved = interleaveArrays(arr1, arr2);
console.log(interleaved); // [1, 2, 3, 4, 5, 6, 8]




/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) { }

/*****************************************************************************/

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(max(n, m)) linear. n = arr1.length, m = arr2.length.
 * - Space: O(n + m) linear. Each item from both arrays is included in new arr.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  for (let i = 0; i < largerArr.length; i++) {
    if (i < arr1.length && i < arr2.length) {
      interleavedItems.push(arr1[i], arr2[i]);
    } else {
      interleavedItems.push(largerArr[i]);
    }
  }

  return interleavedItems;
}

function interleaveArrays2(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  for (let j = i; j < largerArr.length; j++) {
    interleavedItems.push(largerArr[j]);
  }

  return interleavedItems;
}

function interleaveArrays3(arr1, arr2) {
  const interleavedItems = [];
  // condition ? returned-if-true : returned-if-false
  let largerArr = arr1.length > arr2.length ? arr1 : arr2;

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  // concat the remaining items from the larger array.
  return interleavedItems.concat(largerArr.slice(i));
}