/* 
    Parens Valid
    Given a str that has parenthesis in it
    return whether the parenthesis are valid
*/

//            v
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

//            v
const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

//            v
const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

//            v
const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return









// ------------------------------

function checkPar(str) {
    let numPar = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (numPar < 0) {
            return false;
        }
        else if (str[i] == '(') {
            numPar += 1
        }
        else if (str[i] == ')') {
            numPar -= 1;
        }
    }
    console.log(numPar);
    if (numPar == 0) {
        return true;
    }
    else {
        return false;
    }
}
let x = checkPar(str4);
console.log(x);


function closeParenthesisPls(str) {
    var count_open = 0
    var count_close = 0

    //This for loop counts the amount of parenthesis, then checks if at any point the closing parenthesis exceeds the open parenthesis
    for (i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            count_open++
        }
        else if (str[i] == ")") {
            count_close++
        }

        if (count_open < count_close) {
            return false
        }
    }

    //This if statement checks if the parenthesis have an equal amount
    if (count_open == count_close) {
        return true
    }
    else {
        return false
    }
}



function checkPare(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            arr.push(str[i]);
        } else if (str[i] === ")") {
            arr.pop();
        }
    }
    if (arr.length == 0) {
        return true;
    }
    return false;
}

console.log(checkPare(str1))
console.log(checkPare(str2))
console.log(checkPare(str3))
console.log(checkPare(str4))


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) { }

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {boolean}
 */
function parensValid(str = "") {
    const parensStack = [];

    for (const char of str) {
        if (char === "(") {
            parensStack.push(char);
        } else if (char === ")") {
            if (parensStack.length === 0) {
                return false;
            } else {
                parensStack.pop();
            }
        }
    }
    return parensStack.length === 0;
}

/**
 * A stack is helpful, but not necessary, we can have the same time complexity
 * but a better space complexity by using a counter.
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 * @param {string} str
 * @returns {boolean}
 */
function parensValidCount(str = "") {
    let openLessCloseCount = 0;

    for (const char of str) {
        if (char === "(") {
            openLessCloseCount++;
        } else if (char === ")") {
            if (openLessCloseCount === 0) {
                return false;
            } else openLessCloseCount--;
        }
    }
    return openLessCloseCount === 0;
}

module.exports = { parensValid, parensValidCount };