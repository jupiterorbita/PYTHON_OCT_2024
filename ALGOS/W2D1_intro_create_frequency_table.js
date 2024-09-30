/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

//             V
var arr1 = ["a", "a", "a"];
var expected1 = {
  a: 3,
};

var arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
var expected2 = {
  a: 2,
  b: 1,
  c: 3,
  Bob: 1,
  d: 1,
};

var arr3 = [];
var expected3 = {};

// create the function and decide what params it needs and what it will return
function makeFrequencyTable(arr) {
    // 0. create the object to fill in
    var frequencyOutput = {}
    
    // 1. loop over the array
    for (var elem of arr) {
        // console.log(elem);
        
        // check if the elem we are on 
        // exists in the object
        if(!Object.hasOwn(frequencyOutput, elem)) {
            // we create the key - value
            frequencyOutput[elem] = 1
        } else {
            // increment the found elem
            frequencyOutput[elem]++
        }
    }


    console.log(frequencyOutput);
    
    
}

makeFrequencyTable(arr1)
makeFrequencyTable(arr2)

