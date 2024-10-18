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

function fibonacci(num) {
    // 1. base case
    // 2. logic towards base case
    // 3. recursion 
}














// ---------------------------

function fibonacci(num) {
    if (num < 0) return null;
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);

}

function fib(number) {
    if (number < 2) {
        return number;
    }
    else {
        return fib(number - 1) + fib(number - 2);
    }

}

// ====== SPECIAL counting upwards!
function fib(num, count = 1, num1 = 0, num2 = 1) {
    if (num < 1) {
        return 0
    }
    if (count < num) {
        return fib(num, count + 1, num2, num1 + num2)
    }
    return num2
}


// ---- START christian ---
// the nice thing about this approach, is we can apply the same memoize function to any function we want, instead of it only working for fibonacci!
function memoize(func) { // take in a function as a parameter
    cache = {}
    function wrapper(n) { // this function wraps our original function with some extra logic for memoization
        if (n in cache) {
            return cache[n]
        }
        cache[n] = func(n) // we call our original function here
        return cache[n]
    }
    return wrapper // return the wrapper to be re-assigned to the fib function, so when we call fib, we are actually calling wrapper!
}

function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib) // this is the decorator design pattern (it's how decorators in python work under the hood!)
console.log(fib(50))

// memoization without using the decorator pattern
function fib2(n, cache = { 0: 0, 1: 1 }) { // pre-populate our hashmap with our base case 
    if (n in cache) { // check if we have seen the input before
        return cache[n] // return the output if we have
    }
    cache[n] = fib2(n - 1, cache) + fib2(n - 2, cache) // otherwise calculate the output and store it in the hashmap
    return cache[n]
}

console.log(fib2(50))
// ======== END Christian --------------

function fibonacci(num, mem = [0, 1]) {
    if (num < mem.length)
        return mem[num]
    mem.push(fibonacci(num - 2, mem) + fibonacci(num - 1, mem))
    return mem[num];
}

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) { }

/*****************************************************************************/

/**
 * Naive recursion.
 * - Time: O(2^n) exponential.
 * - Space: O(n) linear due to the max call stack depth.
 */
function fibNaiveRecursion(n) {
    if (n < 0) {
        return null;
    }

    if (n < 2) {
        return n;
    }
    return fibNaiveRecursion(n - 1) + fibNaiveRecursion(n - 2);
}

/**
 * Naive Memoization solution.
 * In computing, memoization or memoisation is an optimization technique used
 * primarily to speed up computer programs by storing the results of expensive
 * function calls and returning the cached result when the same inputs occur
 * again.
 *
 * NOTE: Since memo is a param, it only saves solutions that have been
 *    calculated within the recursive calls. After the recursion is finished,
 *    the next time this function is called, memo is re-declared, so it does
 *    not remember solutions from the last time the function was called.
 *    The memo param can be moved outside of the function so that it can
 *    persist all previous solutions. An advanced technique to avoid polluting
 *    the outer scope with a memo var would be to put the memo var in a closure
 *    function.
 *
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear. Call stack depth memo length are both 'n'.
 */
function fibNaiveMemo(n, memo = { 0: 0, 1: 1 }) {
    if (n < 0) {
        return null;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    memo[n] = fibNaiveMemo(n - 1, memo) + fibNaiveMemo(n - 2, memo);

    return memo[n];
}

/**
 * Non recursive.
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear. Call stack depth seq length are both 'n'.
 */
function fibArr(n) {
    if (n < 0) {
        return null;
    }

    const seq = [0, 1];

    for (let i = 2; i <= n; i++) {
        seq.push(seq[i - 2] + seq[i - 1]);
    }
    return seq[n];
}

/**
 * Iteratively calculates the nth fib num. If memoization were added here,
 * this would be the most optimized of the solutions in this file.
 * - Time: O(n) linear.
 * - Space: O(3) -> O(1) constant. There are 3 vars used.
 * @see https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
 * @param {number} n The nth fib num to be calculated
 * @returns {number} The nth fib num.
 */
function fibWhile(n) {
    if (n < 0) {
        return null;
    }

    let prev = 1;
    let prev2 = 0;
    let temp;

    while (n > 0) {
        temp = prev;
        prev = prev + prev2;
        prev2 = temp;
        n--;
    }
    return prev2;
}




function fibonacci(num) {

    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}


// bigger numbers using memoization
function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return num;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(55));

// This code counts the recursions and summation of  function.        
function fibonacci(n, count = 0, sum = 0) {
    count++;
    console.log(`Calculating fibonacci(${n}), count=${count}, sum=${sum}`);
    if (n === 0 || n === 1) {
        sum += n;
        console.log(`fibonacci(${n}) = ${n}, count=${count}, sum=${sum}`);
        return { value: n, count, sum };
    } else {
        const first = fibonacci(n - 1, count, sum);
        const second = fibonacci(n - 2, count, sum);
        const value = first.value + second.value;
        sum += value;
        console.log(`fibonacci(${n}) = ${value}, count=${first.count + second.count + count}, sum=${sum}`);
        return { value, count: first.count + second.count + count, sum };
    }
}

const n = 8;
const { value, count, sum } = fibonacci(n);
console.log(`The ${n}th number in the Fibonacci sequence is ${value}, and it took ${count} recursive calls to calculate. The sum of the sequence up to this point is ${sum}.`);


function fibonacci(num) {

    if (num == 0) {
        return 0
    }

    else if (num == 1) {
        return 1
    }

    else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

// ------ extra
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n + 1);
}
/*
    This function takes an integer n as an argument 
    and returns an array containing the first n Fibonacci numbers. 
    The first two numbers in the sequence are always 0 and 1, 
    so we initialize an array with those values. 
    Then, we use a loop to generate the rest of the sequence 
    by adding together the previous two numbers in the array.
*/
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// ----- tyler
function fib(n, memo = { 0: 0, 1: 1 }) {

    if (memo[n] !== undefined) {
        return memo[n]
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    console.log(memo)
    return memo[n]
}

console.log(fib(909))
// console.log(fib(900))








// ======== memoization
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(10)); // 55
console.time("timer")
// console.log(fibonacci(45)); // 55
console.timeEnd("timer")

for (let n = 0; n < 50; n++) {
    console.log(n, ":", fibonacci(n))
}



function fibMemo(n, memo = {}) {
    // if we have cached the value, then return it
    // if (n in memo) {
    //     return memo[n]
    // }
    if (memo.hasOwnProperty(n)) {
        return memo[n]
    }
    if (n <= 1) {
        return n;
    }

    // cache the value and return it
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
for (let n = 0; n <= 150; n++) {
    console.log(n, ":", fibMemo(n).toLocaleString())
}





function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
/* This function takes an integer n as an argument 
and an optional memo object to store previously calculated Fibonacci numbers. 
It first checks if n is already in the memo object, 
and if so, returns the cached value. 
If n is less than or equal to 1, the function simply returns n. 
Otherwise, it recursively calls itself with n - 1 and n - 2 as arguments, 
and stores the result in the memo object before returning it.
*/
console.time("MemoTimer")
console.log(fibonacci(45)); // 55
console.timeEnd("MemoTimer")

