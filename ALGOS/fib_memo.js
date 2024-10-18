
// {
//     0: 0
//     1: 1,
//     2: 1,
//     3: 2,
//     4: 3
// }
function fibonacci(n, memo = {}) {
    // if we have cashed the value, then return in
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
// for(var i=0; i <= 450; i++){
//     console.log(`fib(${i}) - ${fibonacci(i).toLocaleString()}`)
// }

// ======== memoization
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
// for (let n = 0; n <= 150; n++) {
//     console.log(n, ":", fibMemo(n).toLocaleString())
// }

// console.log(fibonacci(10)); // 55
console.time("timer")
console.log(fibonacci(450).toLocaleString()); // 55
console.timeEnd("timer")
