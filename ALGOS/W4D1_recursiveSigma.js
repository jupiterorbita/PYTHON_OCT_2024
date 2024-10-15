/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)


function  recursiveSigma(n) {

}

recursiveSigma(5)





const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;
// Explanation: Negative numbers -> 0

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return



// ---------------------------













function recursiveSigma(num) {
  // your code here

}

function recursiveSigma(num, sum = 0) {

  num = Math.floor(num)

  if (num <= 0) {
    return sum
  } else {
    return recursiveSigma(num - 1, sum + num)
  }
}

console.log(recursiveSigma(num1))


function recursiveSigma(num) {
  if (num <= 0) {
    return 0;
  }
  else {
    return Math.floor(num + recursiveSigma(num - 1))
  }
}

console.log(recursiveSigma(5))
















/*****************************************************************************/

function sum(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    total += n
  }

  return total;
}
















/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(n) linear.
 * - Space: O(n) linear due to the call stack.
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(n) {
  // get rid of decimals
  const int = parseInt(n);

  // Termination Condition if it's bad data (not a number)
  if (isNaN(int)) {
    return null;
  }

  // base case
  if (int < 1) {
    return 0;
  }
  // if the return keyword is missing below, undefined because returns that
  // happen deeper in the recursion don't get returned all the way out.
  return int + recursiveSigma(int - 1);
}
/* 
  recursiveSig(5) breakdown
  below function calls are added to top of call stack, .push (can be seen in debugger):
  5 + recursiveSig(4)
      4 + recursiveSig(3)
          3 + recursiveSig(2)
              2 + recursiveSig(1)
                  1 + recursiveSig(0)
                      0 is returned - base case reached, can start summing now
                      - call stack "unwinds" now with .pop LIFO (matching indentation)
                  1 + 0 = 1 <- this sum becomes the right side of the next addition
              2 + 1 = 3
          3 + 3 = 6
      4 + 6 = 10
  5 + 10 = 15
*/

function recursiveSigma2(n, sum = 0) {
  // get rid of decimals
  const int = parseInt(n);

  // Termination Condition if it's bad data (not a number)
  if (isNaN(int)) {
    return null;
  }

  // base case
  if (int < 1) {
    return sum;
  }

  const newSum = recursiveSigma2(int - 1, sum + int);
  return newSum;
}

module.exports = { recursiveSigma, recursiveSigma2 };