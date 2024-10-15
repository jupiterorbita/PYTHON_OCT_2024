// Recursion

// log from a number to 1
// 5 -> 4 -> 3 -> 2 -> 1
// function fun(n) {
//     for (var i = n; i >= 1; i--) {
//         console.log(i);
//     }
// }

// fun(5);

// n -> 5 -> 4 -> 3 -> 2 -> 1
function fun(n) {
    if (n > 0) {
        fun(n-1)
        console.log(n);
    }
}

console.log(
    fun(5)
);
