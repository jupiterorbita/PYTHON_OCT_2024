/* 
  Recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60 
  75
  75 is the first common
*/



const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

// base case(s)
// logic
// recursive call(s) / return(s)

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return



// -------------------
function lowestCommonMultiple(a, b, sumA = a, sumB = b) {
    if (sumA == sumB) {
        return sumA
    }
    if (sumA < sumB) {
        sumA += a
    }
    else {
        sumB += b
    }
    return lowestCommonMultiple(a, b, sumA, sumB)

}

var arra = []
var arrb = []
function lowestCommonMultiple(a, b, arra, arrb) {
    if ((arra[arra.length - 1] == arrb[arrb.length - 1]) && (arra.length > 0)) {
        return arra[arra.length - 1]
    }
    if (arra.length == 0) { arra.push(a) }
    if (arrb.length == 0) { arrb.push(b) }
    if (arra[arra.length - 1] > arrb[arrb.length - 1]) { arrb.push(arrb[arrb.length - 1] + arrb[0]) }
    else if (arra[arra.length - 1] < arrb[arrb.length - 1]) { arra.push(arra[arra.length - 1] + arra[0]) }
    return lowestCommonMultiple(a, b, arra, arrb)
}

console.log(lowestCommonMultiple(num1A, num1B, arra, arrb))
var arra = []
var arrb = []
console.log(lowestCommonMultiple(num2A, num2B, arra, arrb))
var arra = []
var arrb = []
console.log(lowestCommonMultiple(num3A, num3B, arra, arrb))
var arra = []
var arrb = []
console.log(lowestCommonMultiple(num4A, num4B, arra, arrb))
var arra = []
var arrb = []
console.log(lowestCommonMultiple(num5A, num5B, arra, arrb))

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b) { }

// =========================
/*****************************************************************************/

function lowestCommonMultiple(a, b, am = a, bm = b) {
    if (am === bm) {
        return am;
    }

    if (am < bm) {
        return lowestCommonMultiple(a, b, am + a, bm);
    }

    if (bm < am) {
        return lowestCommonMultiple(a, b, am, bm + b);
    }
}

function lowestCommonMultiple2(num1, num2, base1 = num1, base2 = num2) {
    if (num1 === num2) {
        return num1;
    }

    if (num1 < num2) {
        const numToAdd = Math.ceil((num2 - num1) / base1) * base1;
        return lowestCommonMultiple2(num1 + numToAdd, num2, base1, base2);
    }

    const numToAdd = Math.ceil((num1 - num2) / base2) * base2;
    return lowestCommonMultiple2(num1, num2 + numToAdd, base1, base2);
}