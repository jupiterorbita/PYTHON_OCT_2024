// recursion review
// why use recursion ?

// function fun(n) {
//     if(n > 0) {
//         console.log(n)
//         fun(n-1)
//     }
// }

// fun(5)

// 5, 4, 3, 2, 1, 0
function sigma(n){
    if (n > 0) {
        return sigma(n - 1) + n
    }
    return 0
}

console.log( 
    sigma(4)
)