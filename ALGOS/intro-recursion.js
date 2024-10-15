// recursion
//  n -> 4 
// 4, 3, 2, 1
function count(n) {
    if (n > 0) {
        console.log("hello", n)
        count(n - 1)
    }
}

count(4)


