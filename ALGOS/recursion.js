function add(num1, num2) {
    console.log(`add(${num1}, ${num2}) INSIDE`);
    return num1 + num2;
}

function addAndPrint(n1, n2) {
    console.log("addAndPrint() START");
    multiplyBy2 = add(n1, n2) * 2;
    console.log("addAndPrint() returned END", multiplyBy2);
    return multiplyBy2;
}

addAndPrint(1, 2);


/*

fun(n) {
    1. _____
    2. fun(n)
    3. _____
}



* a func that calls itself is a recursive func

fun(param) {

    if(base case condition) {
        1. _____
        2. fun(param)
        3. _____
    }

}
*/

function fun(n) {
    if (n > 0) {
        console.log(n);
        fun(n - 1);
    }
}
fun(3)

//* ========== ONE NOTE ==========

/*
fun(param) {

    if(base case condition) {
        !1. calling time (ASC)
        *2. fun(param) * 2
        !3. returning time (DESC)
    }

}
*/

// compare recursion with loops
// loops are repeating statements
// then what is recursion? same but
// loop only ascending phase,
// recursion, asc and desc
// ! RECURSION - WRITING CODE EASIER


function fun(n) {
    if (n > 0) {
        return fun(n - 1) + n;
    }
    return 0;
}

// ------------------------------
// ----- recursion vs loops -----
// ------------------------------

function fun(n) {
    if (n > 0) {
        console.log(n);
        fun(n - 1); // tail recursion
    }
}
time - O(n)


function fun(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
}



// loops


function loop(n) {
    while (n>0) {
        console.log(n)
        n--;
    }
}
loop(5)












