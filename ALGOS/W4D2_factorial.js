/* 
  Recursive Factorial
  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

// 5! 5*4*3*2*1
// 4! 4*3*2*1
// 1! 1
// 3! 3*2*1


const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

// take 5-8 mins to write the pseudocode here:

function factorial(n) {
  // 1. base case
  // 2. recursive call
  // 3. logic towards the base case
}

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1)
  }
  return 1
}





















console.log(factorial(5))
function factorial(n) {
  // 1. base case
  // 2. recursive call
  // 3. logic towards the base case
  // 5! 5*4*3*2*1
  // console.log(n)
  if (n == 0) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))

function factorial(n) {

  if (n > 1) { // or n > 0
    return n * factorial(n - 1);
  }

  return 1;
}










// ----------------------------

function factorial(num, product = 1) {
  num = Math.floor(num);
  if (num == 0) {
    return 1;
  }
  if (num > 1) {
    // console.log(product);
    product = product * num;
    num--;
    return factorial(num, product);
  }
  return product;
}

// Solution 1
function factorial(num, product = 1) {
  num = Math.floor(num)
  if (num > 0) {
    product *= num
    return factorial(num - 1, product)
  }
  return product
}

// Solution 2
function factorial(num) {
  num = Math.floor(num)
  if (num > 0) {
    return (num * factorial(num - 1))
  }
  else {
    return 1
  }
}


function fact(nums) {
  nums = Math.floor(nums);
  if (nums <= 0) {
    return 1;
  }

  else {
    return (nums * fact(nums - 1))
  }
}

function factorial(num) {
  num = Math.floor(num);// change decimal to integer
  if (num <= 0) {
    return 1;
  }
  else { return (num * factorial(num - 1)); }
}


function factorial(n, count = 0, product = 1) {
  count = count + 1;

  if (count > n) return product;

  product *= count;

  return factorial(n, count, product);
}

function factorial(n) {

  n = Math.floor(n)

  if (n == 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1)
  }
}

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(math.floor(num - 1));
}
console.log(factorial(num2));

function fac(nums) {
  nums = Math.floor(nums)
  if (nums == 0) {
    return 1
  }
  else {
    if (nums >= 1) {
      return nums * fac(nums - 1)
    }
  }
}

function factorial(n) {
  let num = Math.floor(n);
  if (num > 0) {
    return factorial(num - 1) * num
  }
  return 1;
}

function rFact(num) {

  //Truncate the input in case it is a decimal
  num = Math.floor(num)

  //Set variables
  result = num
  x = num - 1

  //Base Case (A way to break out of the recursion)
  if (x < 1) {
    return 1
  }

  //Re-run the function descending down to rFact(1) 
  //The base case will break us out at rFact(0)
  return result = result * rFact(x)
}

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) { }

/*****************************************************************************/

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(n) linear.
 * - Space: O(n) linear due to the call stack.
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {
  // Termination Condition if it's bad data (not a number)
  if (isNaN(parseInt(n))) {
    return null;
  }

  n = Math.floor(n);

  // Base case
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}