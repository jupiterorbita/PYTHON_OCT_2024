/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

// 3 -> 3 + 2 + 1 
// 2 -> 2 + 1
// 4 -> 4 + 3 + 2 + 1

function  recursiveSigma(n, sum=0) {
    // BASE CASE / EXIT CONDITION
    if (n <= 0) {
        // exit
        console.log("return ", sum)
        return sum;
    } else {
        console.log("calling function")
        return recursiveSigma(n-1, sum + n)
    }
}

console.log(recursiveSigma(5))
