/* 
  Return the fibonacci number at the nth position, recursively.

  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

var num1 = 0;
var expected1 = 0;

var num2 = 1;
var expected2 = 1;

var num3 = 2;
var expected3 = 1;

var num4 = 3;
var expected4 = 2;

var num5 = 4;
var expected5 = 3;

var num6 = 8;
var expected6 = 21;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

function fibonacci(num, memo = {}) {
    
    if (Object.hasOwn(memo, num)) {
        return memo[num]
    }
    
    if (num <= 1) {
        return num
    }
    // f(n) = f(n-1) + f(n-2)
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num];
}

for (let n = 0; n <= 400; n++) {
    console.log(n, ":", fibonacci(n).toLocaleString())
}