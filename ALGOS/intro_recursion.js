// what is recursion?

// function hi(){
//     console.log("hello there!")
//     hi();
// }

// hi();
// 5 -> 4 -> 3 -> 2 -> 1.....
function fun(n){
    if (n > 0) {
        console.log(n)
        console.log(fun(n - 1))
    }
}

fun(5)