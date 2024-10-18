/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//                   V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// don't be afraid to add parameters!

// base case(s)
// logic
// recursive call(s) / return(s)

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return






  // ----------------------





  function bSearchR(sortedNums, target, left = 0, right = sortedNums.length - 1) {
    if (left > right) {
      return false;
    }

    var mid = Math.floor((left + right) / 2);

    if (sortedNums[mid] === target) {
      return true;
    }
    if (sortedNums[mid] > target) {
      // go left
      return bSearchR(sortedNums, target, left, mid - 1);
    }
    // else go right
    return bSearchR(sortedNums, target, mid + 1, right);
  }
  console.log(bSearchR(nums1, searchNum1)) // false
  console.log(bSearchR(nums2, searchNum2)) // true
  console.log(bSearchR(nums3, searchNum3)) // true

  function binSearchRec(arr, num, low = 0, high = arr.length - 1) {
    if (low <= high) {
      var mid = Math.floor((low + high) / 2)
      console.log(low, high, mid)
      if (arr[mid] === num) {
        return true
      }
      else if (num < arr[mid]) {
        return binSearchRec(arr, num, low, high = mid - 1)
      }
      else if (num > arr[mid]) {
        return binSearchRec(arr, num, low = mid + 1, high)
      }
    }
    return false
  }

  function binaryRecursive(arr, target, low = 0, high = arr.length - 1) {
    var mid = Math.floor((low + high) / 2)
    if (low > high) {
      console.log(arr[high], arr[mid], arr[low])
      return false
    }
    if (arr[mid] == target) {
      console.log(arr[high], arr[mid], arr[low])
      return true
    }
    console.log(arr[high], arr[mid], arr[low])
    if (arr[mid] > target) {
      high = mid - 1
      return binaryRecursive(arr, target, low, high)
    }
    else if (arr[mid] < target) {
      low = mid + 1
      return binaryRecursive(arr, target, low, high)
    }

  }


















  // student solution 1
  function binarySearchRecursive1(sortedNums, num) {
    var mid = Math.floor(sortedNums.length / 2);
    var min = 0;
    var max = sortedNums.length - 1;

    var newArr = [] //to be passed in the next function (slice)

    if (sortedNums[mid] == num) {
      return true;
    }
    if (sortedNums[mid] > num) {
      max = mid;
    }
    if (sortedNums[mid] < num) {
      min = mid;
    }

    if (max - 1 == mid) {
      // if there are only 2 values left
      if (sortedNums[max] == num || sortedNums[min] == num) {
        return true;
      } else return false;
    }

    // slice the remaining array
    for (var i = min; i <= max; i++) {
      newArr.push(sortedNums[i]) // push the values between
    }
    // call the function again
    return binarySearch(newArr, num)
  }
  // console.log(binarySearchRecursive1(nums1, searchNum1)) // false
  // console.log(binarySearchRecursive1(nums2, searchNum2)) // true
  // console.log(binarySearchRecursive1(nums3, searchNum3)) // true

  // ----------- spencer --------
  function bSearchR(sortedNums, target, left = 0, right = sortedNums.length - 1) {
    if (left > right) {
      return false;
    }

    var mid = Math.floor((left + right) / 2);
    if (sortedNums[mid] === target) {
      return true;
    }
    if (sortedNums[mid] > target) {
      // go left
      return bSearchR(sortedNums, target, left, mid - 1);
    }
    // else go right
    return bSearchR(sortedNums, target, mid + 1, right);
  }
  console.log(bSearchR(nums1, searchNum1)) // false
  console.log(bSearchR(nums2, searchNum2)) // true
  console.log(bSearchR(nums3, searchNum3)) // true


  /*****************************************************************************/

  /**
   * Recursively performs a binary search (divide and conquer) to determine if
   * the given sorted nums array contains the given number to search for.
   * - Time: O(log n) logarithmic due to divide and conquer approach.
   * - Space: O(log n) logarithmic due to the call stack.
   * @param {Array<number>} sortedNums
   * @param {number} searchNum
   * @param {number} leftIdx The left index of the current slice of the array
   *    that is being searched.
   * @param {number} rightIdx The right index of the current slice of the array
   *    that is being searched.
   * @returns {boolean} Whether the searchNum was found in the sortedNums array.
   */
  function binarySearch(
    sortedNums,
    searchNum,
    leftIdx = 0,
    rightIdx = sortedNums.length - 1
  ) {
    if (leftIdx > rightIdx) {
      return false;
    }

    const midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (sortedNums[midIdx] === searchNum) {
      return true;
    }

    if (searchNum < sortedNums[midIdx]) {
      return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
    } else {
      return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
    }
  }

  /**
   * Exponential search (O(log n) logarithmic time) can out-perform binary search
   *    when the element being searched for is near the beginning of the array.
   *    Exponential search narrows down the array first, then calls binary search
   *    on the narrowed down array.
   * - Time: O(log2 i) where i is the location where searchNum is located.
   * - Space: O(1) constant.
   */
  function exponentialSearch(sortedNums, searchNum) {
    if (sortedNums[0] === searchNum) {
      return true;
    }

    // repeatedly double i to quickly narrow down range
    let i = 1;
    while (i < sortedNums.length && sortedNums[i] <= searchNum) {
      i *= 2;
    }

    return binarySearch(
      sortedNums,
      searchNum,
      i / 2,
      Math.min(i, sortedNums.length)
    );
  }

  module.exports = { binarySearch };