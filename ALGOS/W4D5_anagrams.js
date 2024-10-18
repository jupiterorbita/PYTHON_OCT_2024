/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) { }



// =========================

function generateAnagrams(str, solutions = [], partial = "") {
    if (!str) {
        solutions.push(partial);
    }

    for (let i = 0; i < str.length; i++) {
        const leftSlice = str.slice(0, i);
        const rightSlice = str.slice(i + 1); // skips current letter
        generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
}



function generateAnagrams(str) {
    let arr = [];
    //function that makes anagrams
    function anagram(bef, aft) {
        // if there are no more characters to add
        if (aft === "") {
            arr.push(bef);
        }
        else {
            //if there are still characters to add, continue
            for (let i = 0; i < aft.length; i++) {
                anagram(
                    bef + aft[i], //characters before and at current index
                    aft.slice(0, i) + aft.slice(i + 1) //characters before and 1 after current index
                );
            }
        }
    }
    //start making anagrams
    anagram("", str);
    return arr;
}