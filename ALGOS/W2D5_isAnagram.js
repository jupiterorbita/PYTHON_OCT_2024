/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return










// -------------------------------------------

function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        const index = s2.indexOf(char);
        console.log(index);
        if (index === -1) {
            return false;
        }
        s2 = s2.substring(0, index) + s2.substring(index + 1);
        console.log(s2)
    }
    return true;
}

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false

    const s1CharFreq = {}
    const s2CharFreq = {}

    for (let i = 0; i < s1.length; i++) {
        const s1CharLower = s1[i].toLowerCase()
        const s2CharLower = s2[i].toLowerCase()

        if (s1CharFreq.hasOwnProperty(s1CharLower)) {
            s1CharFreq[s1CharLower]++
        } else {
            s1CharFreq[s1CharLower] = 1
        }

        if (s2CharFreq.hasOwnProperty(s2CharLower)) {
            s2CharFreq[s2CharLower]++
        } else {
            s2CharFreq[s2CharLower] = 1
        }
    }

    for (const char in s1CharFreq) {
        if (!s2CharFreq.hasOwnProperty(char)) {
            return false
        }

        if (s1CharFreq[char] !== s2CharFreq[char]) {
            return false
        }
    }
    return true
}
// =====
function trim(str) {
    let startIdx = 0
    let endIdx = str.length - 1


    while (str[startIdx] == " ") {
        startIdx++
    }

    while (str[endIdx] == " ") {
        endIdx--
    }

    return mySlice(str, startIdx, endIdx)

}
function mySlice(str, startIdx, endIdx) {
    let newStr = ""
    for (let i = startIdx; i < endIdx + 1; i++) {
        newStr += str[i]
    }
    return newStr
}
// =====

function isAnagram(str1, str2) {
    // Convert strings to lowercase and remove non-letter characters
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Create dictionary object
    const dict = {};

    // Loop through first string and add each character to dictionary
    for (let i = 0; i < str1.length; i++) {
        if (dict[str1[i]] === undefined) {
            dict[str1[i]] = 1;
        } else {
            dict[str1[i]]++;
        }
    }

    // Loop through second string and decrement dictionary values
    for (let i = 0; i < str2.length; i++) {
        if (dict[str2[i]] === undefined) {
            dict[str2[i]] = -1;
        } else {
            dict[str2[i]]--;
        }
    }

    // Check if all dictionary values are 0
    for (const key in dict) {
        if (dict[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram(strA3, strB3))



function isAnagram(s1, s2) {

    // check if the lengths are equal
    if (s1.length != s2.length) {
        return false
    }

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var freq1 = {};
    var freq2 = {};

    // loop to create frequency table
    for (var i = 0; i < s1.length; i++) {
        console.log(s1[i], s2[i]);

        // for frequency if s1[i] is a key then add 1 to value
        // if not a key set value to 1
        if (Object.keys(freq1).includes(s1[i])) {
            freq1[s1[i]]++;
        } else {
            freq1[s1[i]] = 1;
        }

        // for frequency if s2[i] is a key then add 1 to value
        // if not a key set value to 1
        if (Object.keys(freq2).includes(s2[i])) {
            freq2[s2[i]]++;
        } else {
            freq2[s2[i]] = 1;
        }
    }


    console.log("s1 table:", freq1)
    console.log("s2 table:", freq2)

    freq1Keys = Object.keys(freq1)
    for (var key of freq1Keys) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }

    }
    return true;
}

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < s1.length; i++) {
        const char1 = s1[i];
        const char2 = s2[i];
        if (obj1[char1]) {
            obj1[char1]++;
        } else {
            obj1[char1] = 1;
        }
        if (obj2[char2]) {
            obj2[char2]++;
        } else {
            obj2[char2] = 1;
        }
    }

    for (const char in obj1) {
        if (obj1[char] !== obj2[char]) {
            return false;
        }
    }

    return true;
}



console.log(isAnagram(strA4, strB4))
console.log(isAnagram("Peas", "Bees"))

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) { }

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram(s1 = "", s2 = "") {
    if (s1.length !== s2.length) {
        return false;
    }

    // create a frequency table of characters in s1 and s2
    const s1CharFreq = {};
    const s2CharFreq = {};

    // build both tables in same loop since the strings are same length
    for (let i = 0; i < s1.length; i++) {
        const s1CharUpper = s1[i].toUpperCase();
        const s2CharUpper = s2[i].toUpperCase();

        if (s1CharFreq.hasOwnProperty(s1CharUpper) === false) {
            s1CharFreq[s1CharUpper] = 1;
        } else {
            s1CharFreq[s1CharUpper]++;
        }

        if (s2CharFreq.hasOwnProperty(s2CharUpper) === false) {
            s2CharFreq[s2CharUpper] = 1;
        } else {
            s2CharFreq[s2CharUpper]++;
        }
    }

    // compare both frequency tables to make sure all same characters and all same frequency
    for (const char in s1CharFreq) {
        if (!s2CharFreq.hasOwnProperty(char)) {
            return false;
        }

        // comparing frequency of this character
        if (s1CharFreq[char] !== s2CharFreq[char]) {
            return false;
        }
    }
    return true;
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram2(s1 = "", s2 = "") {
    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let s1CharCount = 0;
        let s2CharCount = 0;
        let currChar = s1[i].toUpperCase();

        // count how many times currChar appears in both strings
        for (let j = 0; j < s1.length; ++j) {
            if (s1[j].toUpperCase() === currChar) {
                s1CharCount++;
            }

            if (s2[j].toUpperCase() === currChar) {
                s2CharCount++;
            }
        }

        if (s1CharCount !== s2CharCount) {
            return false;
        }
    }
    return true;
}