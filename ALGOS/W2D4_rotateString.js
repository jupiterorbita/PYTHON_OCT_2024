/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return




// ---------------------------

function rotateString(string, rotate) {
    var newstr = ""
    var x = string.length - rotate % string.length
    for (var i = x; i < string.length; i++) {
        newstr += string[i]
    }
    for (var j = 0; j < x; j++) {
        newstr += string[j]
    }
    return newstr
}

function rotateStr(str, rotate) {
    var newStr = ""
    if (rotate == 0) {
        return str
    }
    if (rotate > str.length) {
        rotate -= str.length
    }
    for (var i = str.length - rotate; i < str.length; i++) {
        newStr += str[i]
    }

    for (var j = 0; j < str.length - rotate; j++) {
        newStr += str[j]
    }
    return newStr
}



function rotateString(str, int) {
    // console.log("str is: " + str);
    if (int === 0) {
        return str; //early exit
    }
    if (int > str.length) {
        int = int - str.length; //reassign int value by subtracting length - this reduces the complexity * amount of operations needed
    }
    // console.log("int is: " + int);
    let newStr = ""; //this is what we return at end
    let splitStr = str.split("") //split on each char
    // console.log("split made: " + splitStr);
    for (var i = splitStr.length - int; i < splitStr.length; i++) {
        // console.log(splitStr[i]);
        newStr += splitStr[i]; //start from the back and concat string
    }
    for (var i = 0; i < splitStr.length - int; i++) {
        // console.log(splitStr[i]);
        newStr += splitStr[i]; //now add the rest of the chars
    }
    return newStr;
}










function rotateStr(str, amnt) {
    let amnt = amnt % str.length;
    if (amnt == 0) return str;
    let charsToFront = "";
    let theRest = "";
    for (let i = str.length - amnt; i < str.length; i++) {
        charsToFront += str[i];
    }
    for (let i = 0; i < str.length - amnt; i++) {
        theRest += str[i];
    }
    return charsToFront + theRest;

}




function rotateStr(str, amnt) {
    var temp = ""
    var newStr = ""
    amnt = amnt % str.length
    for (var i = 0; i < str.length; i++) {
        if (i <= str.length - 1 - amnt) {
            temp += str[i]
        } else {
            newStr += str[i]
        }
    }
    newStr += temp
    return newStr
}


function rotateStr(str, amnt) {
    var len = str.length;
    amnt %= len;
    // amnt = amnt % len;
    strArr = str.split("");
    var tempStr = "";
    // const str = "Hello World";
    for (var i = 1; i <= amnt; i++) { // 1 to 4
        tempStr = strArr.pop() + tempStr; //tempStr =orld
    }
    return tempStr + strArr.join("");
}



function rotateStr(str, amnt) {
    let newStr = "";
    amnt = amnt % str.length;

    const beginning = str.slice(str.length - amnt);
    const end = str.slice(0, str.length - amnt);

    newStr += beginning + end;
    return newStr;
}

function rotateStr(str, int) {
    var newStr = "";
    if (int > str.length) {
        int = int - str.length;
    }
    for (var i = 0; i < int; i++) {
        newStr = str[str.length - 1 - i] + newStr;
    }
    for (var j = 0; j < str.length - int; j++) {
        newStr += str[j];
    }
    return newStr;
}


function isRotation(str, num) {
    var arr = []
    if (num > str.length) {
        num = num - str.length
    }
    for (var ch = 0; ch < str.length; ch++) {
        arr.push(str[ch])
    }
    for (var i = 0; i < num; i++) {
        arr.unshift(arr.pop())
    }

    var newStr = arr.join("")
    console.log(newStr)
}

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) { }

/*****************************************************************************/

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr(str = "", amnt = 0) {
    /* 
    We need to use the modulo operator only when the amnt > str.length, to get
    the remainder, but when amnt < str.length, rotateAmnt will be the same as
    amnt so we don't have to worry about that.
    The reason we only care about the remainder when amnt > str.length is because
    if amnt === str.length, the string is rotated one full cycle back to it's
    original position. So we can ignore all full cycles and just focus on the
    remainder that needs to be rotated.
    */
    const rotateAmnt = amnt % str.length;

    if (!rotateAmnt || rotateAmnt <= 0) {
        return str;
    }

    let charsToRotate = "";
    let newStr = "";

    for (let i = str.length - rotateAmnt; i < str.length; i++) {
        charsToRotate += str[i];
    }

    for (let i = 0; i < str.length - rotateAmnt; i++) {
        newStr += str[i];
    }
    return charsToRotate + newStr;
}

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr2(str, amnt) {
    const rotateAmnt = amnt % str.length;
    return (
        str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt)
    );
}